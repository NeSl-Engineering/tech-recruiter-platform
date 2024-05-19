from functools import reduce
from typing import Literal, Mapping

from django.contrib.postgres.search import (
    SearchQuery,
    SearchRank,
    SearchVector
)
from django.db.models import Model


def search(
    model: Model,
    query: str,
    fields_weights: Mapping[
        str,
        Literal['A'] | Literal['B'] | Literal['C']
    ]
):
    '''
Searches for `model` objects in the db
Search is performed on given fields and weights `fields_weights` parameter
`query` is a string on which to search
    '''
    search_query = SearchQuery(query)
    search_vector = None
    for field, weight in fields_weights.items():
        new_vector = SearchVector(field, weight=weight)
        if search_vector is None:
            search_vector = new_vector
        else:
            search_vector += new_vector
    results = model.objects \
        .annotate(rank=SearchRank(search_vector, search_query)) \
        .filter(rank__gte=0.3) \
        .order_by('rank').all()
    return results

