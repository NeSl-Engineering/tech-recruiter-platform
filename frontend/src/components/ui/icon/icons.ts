export interface Icons {
	[key: string]: string
}

const icons: Icons = {
	search: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.64912 0C14.9782 0 19.2982 4.32006 19.2982 9.64912C19.2982 11.8392 18.5686 13.8588 17.3392 15.4782L24.6146 22.7538C25.1285 23.2677 25.1285 24.1008 24.6146 24.6146C24.1475 25.0817 23.4165 25.1242 22.9014 24.742L22.7538 24.6146L15.4782 17.3392C13.8588 18.5686 11.8392 19.2982 9.64912 19.2982C4.32006 19.2982 0 14.9782 0 9.64912C0 4.32006 4.32006 0 9.64912 0ZM9.64912 2.63158C5.77344 2.63158 2.63158 5.77344 2.63158 9.64912C2.63158 13.5248 5.77344 16.6667 9.64912 16.6667C13.5248 16.6667 16.6667 13.5248 16.6667 9.64912C16.6667 5.77344 13.5248 2.63158 9.64912 2.63158Z" fill="currentColor"/></svg>`,
	arrowRightTop: `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_269_231" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21"><rect y="0.5" width="20" height="20" fill="currentColor"/></mask><g mask="url(#mask0_269_231)"><path d="M4.62819 16.7501L3.75 15.8719L13.2885 6.33348H7.49998V5.0835L15.4166 5.0835V13.0001H14.1666V7.21166L4.62819 16.7501Z" fill="currentColor"/></g></svg>`,
	arrowRight: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_59_1200" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><rect width="20" height="20" fill="currentColor"/></mask><g mask="url(#mask0_59_1200)"><path d="M1.9548 11.0376L1.9548 9.79569L15.4442 9.79569L11.3511 5.70262L12.235 4.81875L17.8329 10.4167L12.235 16.0146L11.3511 15.1307L15.4442 11.0376L1.9548 11.0376Z" fill="currentColor"/></g></svg>`,
	home: `<svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49997 22.9599H11.4038V16.0272H17.5961V22.9599H21.5V12.4599L14.5 7.18744L7.49997 12.4599V22.9599ZM5.75 24.7098V11.5849L14.5 5L23.2499 11.5849V24.7098H15.8461V17.7771H13.1538V24.7098H5.75Z" fill="currentColor"/></svg>`,
	plan: `<svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 25.0551L6.91665 20.9359V14.609L2.87823 12.4013L14.5 6.07446L26.1216 12.4013V20.7923H24.3717V13.3705L22.0833 14.609V20.9359L14.5 25.0551ZM14.5 16.718L22.4804 12.4013L14.5 8.08466L6.51952 12.4013L14.5 16.718ZM14.5 23.0628L20.3333 19.9128V15.5423L14.5 18.7261L8.66662 15.5423V19.9128L14.5 23.0628Z" fill="currentColor"/></svg>`,
	blog: `<svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.05129 24.8981C6.53302 24.8981 6.08935 24.7135 5.7203 24.3444C5.35122 23.9754 5.16669 23.5317 5.16669 23.0135C5.16669 22.4952 5.35122 22.0515 5.7203 21.6825C6.08935 21.3134 6.53302 21.1289 7.05129 21.1289C7.56954 21.1289 8.01321 21.3134 8.38228 21.6825C8.75134 22.0515 8.93587 22.4952 8.93587 23.0135C8.93587 23.5317 8.75134 23.9754 8.38228 24.3444C8.01321 24.7135 7.56954 24.8981 7.05129 24.8981ZM21.2308 24.8981C21.2308 22.6604 20.8101 20.5711 19.9686 18.6301C19.1272 16.689 17.9797 14.9918 16.5263 13.5384C15.0729 12.085 13.3756 10.9376 11.4346 10.0961C9.49349 9.25468 7.4042 8.83396 5.16669 8.83396V6.23145C7.76326 6.23145 10.1882 6.71869 12.4415 7.69316C14.6948 8.66762 16.6695 10.0029 18.3657 11.6991C20.0618 13.3952 21.3971 15.3692 22.3716 17.6209C23.3461 19.8727 23.8333 22.2984 23.8333 24.8981H21.2308ZM14.5 24.8981C14.5 23.5953 14.257 22.3849 13.7709 21.2668C13.2847 20.1488 12.6139 19.1619 11.7584 18.3064C10.9028 17.4508 9.91599 16.78 8.79794 16.2939C7.67988 15.8078 6.46946 15.5647 5.16669 15.5647V12.9622C6.82845 12.9622 8.3793 13.2736 9.81924 13.8964C11.2592 14.5193 12.5225 15.3723 13.6093 16.4555C14.6925 17.5413 15.5455 18.8036 16.1683 20.2424C16.7911 21.6812 17.1025 23.2331 17.1025 24.8981H14.5Z" fill="currentColor"/></svg>`,
	courses: `<svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1666 17.608H16.5304V15.858H12.1666V17.608ZM12.1666 14.108H20.8942V12.358H12.1666V14.108ZM12.1666 10.608H20.8942V8.85803H12.1666V10.608ZM9.90063 21.983C9.31131 21.983 8.81249 21.7788 8.40418 21.3705C7.99584 20.9621 7.79168 20.4633 7.79168 19.874V6.59202C7.79168 6.00269 7.99584 5.50387 8.40418 5.09553C8.81249 4.6872 9.31131 4.48303 9.90063 4.48303H23.1826C23.7719 4.48303 24.2708 4.6872 24.6791 5.09553C25.0874 5.50387 25.2916 6.00269 25.2916 6.59202V19.874C25.2916 20.4633 25.0874 20.9621 24.6791 21.3705C24.2708 21.7788 23.7719 21.983 23.1826 21.983H9.90063ZM9.90063 20.233H23.1826C23.2724 20.233 23.3546 20.1956 23.4294 20.1208C23.5042 20.046 23.5416 19.9637 23.5416 19.874V6.59202C23.5416 6.50226 23.5042 6.41998 23.4294 6.34518C23.3546 6.2704 23.2724 6.233 23.1826 6.233H9.90063C9.81088 6.233 9.72861 6.2704 9.65382 6.34518C9.57902 6.41998 9.54162 6.50226 9.54162 6.59202V19.874C9.54162 19.9637 9.57902 20.046 9.65382 20.1208C9.72861 20.1956 9.81088 20.233 9.90063 20.233ZM5.81733 26.0662C5.22803 26.0662 4.72921 25.8621 4.32087 25.4537C3.91254 25.0454 3.70837 24.5466 3.70837 23.9573V8.92535H5.45835V23.9573C5.45835 24.0471 5.49574 24.1293 5.57052 24.2041C5.64532 24.2789 5.72759 24.3163 5.81733 24.3163H20.8493V26.0662H5.81733Z" fill="currentColor"/></svg>`,
	progress: `<svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.09292 20.526H10.8429V14.9844H9.09292V20.526ZM18.157 20.526H19.907V9.15105H18.157V20.526ZM13.625 20.526H15.3749V17.3177H13.625V20.526ZM13.625 14.9844H15.3749V12.6511H13.625V14.9844ZM6.6923 24.901C6.10297 24.901 5.60415 24.6969 5.19581 24.2885C4.78748 23.8802 4.58331 23.3814 4.58331 22.792V7.17673C4.58331 6.58741 4.78748 6.08858 5.19581 5.68025C5.60415 5.27192 6.10297 5.06775 6.6923 5.06775H22.3076C22.8969 5.06775 23.3958 5.27192 23.8041 5.68025C24.2124 6.08858 24.4166 6.58741 24.4166 7.17673V22.792C24.4166 23.3814 24.2124 23.8802 23.8041 24.2885C23.3958 24.6969 22.8969 24.901 22.3076 24.901H6.6923ZM6.6923 23.1511H22.3076C22.3974 23.1511 22.4796 23.1137 22.5544 23.0389C22.6292 22.9641 22.6666 22.8818 22.6666 22.792V7.17673C22.6666 7.08698 22.6292 7.0047 22.5544 6.9299C22.4796 6.85511 22.3974 6.81772 22.3076 6.81772H6.6923C6.60254 6.81772 6.52026 6.85511 6.44546 6.9299C6.37068 7.0047 6.33328 7.08698 6.33328 7.17673V22.792C6.33328 22.8818 6.37068 22.9641 6.44546 23.0389C6.52026 23.1137 6.60254 23.1511 6.6923 23.1511Z" fill="currentColor"/></svg>`,
	answer: `<svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4872 22.2455C14.8203 22.2455 15.1016 22.1305 15.3312 21.9005C15.5608 21.6705 15.6756 21.3889 15.6756 21.0558C15.6756 20.7227 15.5606 20.4413 15.3306 20.2117C15.1006 19.9821 14.819 19.8673 14.4859 19.8673C14.1528 19.8673 13.8714 19.9824 13.6418 20.2124C13.4122 20.4424 13.2974 20.7239 13.2974 21.0571C13.2974 21.3902 13.4125 21.6715 13.6425 21.9011C13.8725 22.1307 14.154 22.2455 14.4872 22.2455ZM13.6609 18.068H15.3032C15.3181 17.4936 15.4023 17.0348 15.5556 16.6915C15.7089 16.3483 16.081 15.8932 16.6718 15.3263C17.1848 14.8133 17.5778 14.3395 17.8508 13.905C18.1237 13.4705 18.2602 12.9574 18.2602 12.3656C18.2602 11.3615 17.8994 10.577 17.1777 10.0124C16.456 9.44777 15.6024 9.16546 14.6167 9.16546C13.643 9.16546 12.8371 9.42534 12.1992 9.94511C11.5613 10.4649 11.1062 11.077 10.834 11.7814L12.3327 12.3827C12.4748 11.9953 12.7178 11.618 13.0618 11.2508C13.4059 10.8836 13.9167 10.7 14.5942 10.7C15.2838 10.7 15.7934 10.8889 16.1232 11.2666C16.4531 11.6442 16.618 12.0597 16.618 12.5129C16.618 12.9092 16.505 13.2719 16.2792 13.601C16.0533 13.9301 15.7654 14.2479 15.4154 14.5546C14.6496 15.2456 14.1657 15.7967 13.9638 16.2081C13.7619 16.6194 13.6609 17.2394 13.6609 18.068ZM14.5019 26.7776C12.969 26.7776 11.5282 26.4867 10.1793 25.9049C8.83049 25.3231 7.65719 24.5336 6.65944 23.5363C5.66166 22.539 4.87176 21.3662 4.28973 20.0179C3.7077 18.6697 3.41669 17.2291 3.41669 15.6962C3.41669 14.1633 3.70758 12.7224 4.28935 11.3736C4.87113 10.0248 5.66067 8.85147 6.65798 7.85371C7.6553 6.85594 8.82809 6.06604 10.1763 5.48401C11.5245 4.90198 12.9651 4.61096 14.498 4.61096C16.031 4.61096 17.4718 4.90185 18.8207 5.48363C20.1695 6.06541 21.3428 6.85495 22.3405 7.85225C23.3383 8.84958 24.1282 10.0224 24.7103 11.3706C25.2923 12.7188 25.5833 14.1594 25.5833 15.6923C25.5833 17.2252 25.2924 18.6661 24.7106 20.0149C24.1289 21.3638 23.3393 22.5371 22.342 23.5348C21.3447 24.5326 20.1719 25.3225 18.8237 25.9045C17.4754 26.4866 16.0349 26.7776 14.5019 26.7776ZM14.5 25.0276C17.1055 25.0276 19.3125 24.1234 21.1208 22.3151C22.9292 20.5068 23.8333 18.2998 23.8333 15.6943C23.8333 13.0887 22.9292 10.8818 21.1208 9.07343C19.3125 7.2651 17.1055 6.36093 14.5 6.36093C11.8944 6.36093 9.68749 7.2651 7.87916 9.07343C6.07082 10.8818 5.16666 13.0887 5.16666 15.6943C5.16666 18.2998 6.07082 20.5068 7.87916 22.3151C9.68749 24.1234 11.8944 25.0276 14.5 25.0276Z" fill="currentColor"/></svg>`,
	notification: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_149_364" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="currentColor"/></mask><g mask="url(#mask0_149_364)"><path d="M11.9983 21.6923C11.5007 21.6923 11.0753 21.5153 10.7221 21.1613C10.3689 20.8073 10.1923 20.3817 10.1923 19.8846H13.8077C13.8077 20.3833 13.6305 20.8093 13.2761 21.1625C12.9218 21.5157 12.4959 21.6923 11.9983 21.6923ZM4.5 18.8846V17.3846H6.3077V9.92305C6.3077 8.57818 6.72276 7.38908 7.55287 6.35575C8.38301 5.32242 9.44872 4.66153 10.75 4.37308V3.75C10.75 3.40278 10.8714 3.10765 11.1143 2.8646C11.3571 2.62153 11.6519 2.5 11.9988 2.5C12.3457 2.5 12.641 2.62153 12.8846 2.8646C13.1282 3.10765 13.25 3.40278 13.25 3.75V3.94998C13.0859 4.24613 12.9557 4.54741 12.8596 4.85383C12.7634 5.16023 12.7045 5.47817 12.6827 5.80765C12.5689 5.78713 12.4579 5.76918 12.3498 5.7538C12.2417 5.73842 12.1251 5.73073 12 5.73073C10.8423 5.73073 9.85413 6.14003 9.03555 6.95863C8.21695 7.77721 7.80765 8.76535 7.80765 9.92305V17.3846H16.1923V11.1327C16.4218 11.2148 16.6641 11.2789 16.9192 11.325C17.1743 11.3712 17.432 11.391 17.6922 11.3846V17.3846H19.5V18.8846H4.5ZM17.4818 9.20193C16.7183 9.20193 16.0688 8.93468 15.5336 8.40018C14.9983 7.86568 14.7307 7.21663 14.7307 6.45305C14.7307 5.68948 14.998 5.04008 15.5325 4.50483C16.067 3.96958 16.716 3.70195 17.4796 3.70195C18.2431 3.70195 18.8925 3.9692 19.4278 4.5037C19.9631 5.0382 20.2307 5.68723 20.2307 6.4508C20.2307 7.21437 19.9634 7.86378 19.4289 8.39903C18.8944 8.93429 18.2454 9.20193 17.4818 9.20193Z" fill="currentColor"/></g></svg>`,
	threeDots: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 10.896 3.896 10 5 10C6.104 10 7 10.896 7 12C7 13.104 6.104 14 5 14C3.896 14 3 13.104 3 12ZM12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10ZM19 10C17.896 10 17 10.896 17 12C17 13.104 17.896 14 19 14C20.104 14 21 13.104 21 12C21 10.896 20.104 10 19 10Z" fill="currentColor"/></svg>`,
	tick: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3333 4L5.99996 11.3333L2.66663 8" stroke="white" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
	lock: `<svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M2.00642 17.1249C1.59082 17.1249 1.23585 16.9777 0.941521 16.6834C0.647173 16.3891 0.5 16.0341 0.5 15.6185V7.79804C0.5 7.38245 0.647173 7.02748 0.941521 6.73315C1.23585 6.4388 1.59082 6.29163 2.00642 6.29163H3V4.62496C3 3.58438 3.36485 2.69924 4.09454 1.96954C4.82425 1.23985 5.7094 0.875 6.74998 0.875C7.79056 0.875 8.67571 1.23985 9.40542 1.96954C10.1351 2.69924 10.5 3.58438 10.5 4.62496V6.29163H11.4935C11.9091 6.29163 12.2641 6.4388 12.5584 6.73315C12.8528 7.02748 13 7.38245 13 7.79804V15.6185C13 16.0341 12.8528 16.3891 12.5584 16.6834C12.2641 16.9777 11.9091 17.1249 11.4935 17.1249H2.00642ZM2.00642 15.8749H11.4935C11.5683 15.8749 11.6298 15.8509 11.6779 15.8028C11.7259 15.7547 11.75 15.6933 11.75 15.6185V7.79804C11.75 7.72325 11.7259 7.66181 11.6779 7.61373C11.6298 7.56565 11.5683 7.5416 11.4935 7.5416H2.00642C1.93163 7.5416 1.87019 7.56565 1.8221 7.61373C1.77402 7.66181 1.74998 7.72325 1.74998 7.79804V15.6185C1.74998 15.6933 1.77402 15.7547 1.8221 15.8028C1.87019 15.8509 1.93163 15.8749 2.00642 15.8749ZM6.74998 13.1666C7.1549 13.1666 7.49917 13.0248 7.78281 12.7411C8.06647 12.4575 8.20829 12.1132 8.20829 11.7083C8.20829 11.3034 8.06647 10.9591 7.78281 10.6754C7.49917 10.3918 7.1549 10.25 6.74998 10.25C6.34506 10.25 6.00078 10.3918 5.71715 10.6754C5.43349 10.9591 5.29167 11.3034 5.29167 11.7083C5.29167 12.1132 5.43349 12.4575 5.71715 12.7411C6.00078 13.0248 6.34506 13.1666 6.74998 13.1666ZM4.24998 6.29163H9.24998V4.62496C9.24998 3.93051 9.00692 3.34024 8.52081 2.85412C8.0347 2.36801 7.44442 2.12496 6.74998 2.12496C6.05553 2.12496 5.46526 2.36801 4.97915 2.85412C4.49303 3.34024 4.24998 3.93051 4.24998 4.62496V6.29163Z" fill="currentColor"/>
	</svg>
	`,
	download: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99997 11.7884L3.7308 7.51925L4.78462 6.43465L7.25 8.90003V0.5H8.74995V8.90003L11.2153 6.43465L12.2692 7.51925L7.99997 11.7884ZM2.3077 15.5C1.80257 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V10.9808H1.99997V13.6923C1.99997 13.7692 2.03202 13.8397 2.09612 13.9038C2.16024 13.9679 2.23077 14 2.3077 14H13.6922C13.7692 14 13.8397 13.9679 13.9038 13.9038C13.9679 13.8397 14 13.7692 14 13.6923V10.9808H15.5V13.6923C15.5 14.1974 15.325 14.625 14.975 14.975C14.625 15.325 14.1974 15.5 13.6922 15.5H2.3077Z" fill="currentColor"/></svg>`
}

export default icons
