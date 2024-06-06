from storages.backends.s3boto3 import S3StaticStorage


class CustomStorage(S3StaticStorage):

    def url(self, name):
        url = super().url(name)
        url = f'http://158.160.89.94:9000/tech-recruiter{url.split("tech-recruiter")[-1]}'
        return url

