"use client";

import Image from "next/image";

export function Logo(props: any) {
	return (
		<Image
			src={"/logo.svg"}
			alt="Orioca"
			width={180}
			height={20}
			{...props}
		/>
	);
}

// export function Logo(props: any) {
// 	return (
// 		<div className="flex items-center">
// 			<picture>
// 				<img
// 					className="transform -rotate-90"
// 					src="data:image/svg+xml;base64,PHN2ZwoJaGVpZ2h0PSIxLjVyZW0iCgl2aWV3Qm94PSIwIDAgNDAgNDAiCglmaWxsPSJub25lIgoJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+Cgk8cGF0aAoJCWQ9Ik0zNC42MTMgMTEuMjc1YTIuNTYzIDIuNTYzIDAgMCAwLTEuMjIzLTEuMDMxTDguNTQ1LjE5YTIuNTc0IDIuNTc0IDAgMCAwLTIuNDA5LjI1MkEyLjU4MiAyLjU4MiAwIDAgMCA1IDIuNTg0VjE1YzAgMS4wNTMuNjM4IDIgMS42MTMgMi4zOTRMMTMuMDUzIDIwbDIxLjU2IDguNzIyYy4yNTQtLjQwOS4zODgtLjg4MS4zODctMS4zNjNWMTIuNjM3YTIuNTY2IDIuNTY2IDAgMCAwLS4zODctMS4zNjJaIgoJCWZpbGw9InVybCgjbG9nb19ncmFkaWVudF9vbmUpIgoJPjwvcGF0aD4KCTxwYXRoCgkJZD0iTTM0LjYyNSAxMS4yNzggMTMuMDYgMjBsLTYuNDQ2IDIuNjFBMi41NzggMi41NzggMCAwIDAgNSAyNXYxMi40MTZhMi41NzYgMi41NzYgMCAwIDAgMy41NDMgMi4zOTRsMjQuODU4LTEwLjA1NGEyLjU0IDIuNTQgMCAwIDAgMS4yMTItMS4wMzdjLjI1NC0uNDEuMzg4LS44ODEuMzg3LTEuMzYzVjEyLjY0MWEyLjU2NiAyLjU2NiAwIDAgMC0uMzc1LTEuMzYzWiIKCQlmaWxsPSIjOTZGIgoJPjwvcGF0aD4KCTxwYXRoCgkJZD0ibTM0LjYxNyAxMS4yODIuMDk3LjE3MmMuMTg5LjM2NS4yODcuNzcuMjg2IDEuMTg0bC0uMDAxLS4wMjN2MTQuNzQxYy4wMDEuNDgyLS4xMzMuOTU0LS4zODcgMS4zNjNsLS4wMDEuMDAxLTIxLjU1NC04LjcxOWguMDAzbDIxLjU1Ny04LjcxOVoiCgkJZmlsbD0idXJsKCNsb2dvX2dyYWRpZW50X3R3bykiCgk+PC9wYXRoPgoJPGRlZnM+CgkJPGxpbmVhckdyYWRpZW50CgkJCWlkPSJsb2dvX2dyYWRpZW50X29uZSIKCQkJeDE9IjIwIgoJCQl5MT0iNC4xMjgiCgkJCXgyPSIyMCIKCQkJeTI9IjIxLjEyOCIKCQkJZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiCgkJPgoJCQk8c3RvcCBzdG9wLWNvbG9yPSIjMTFFRkUzIj48L3N0b3A+CgkJCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzIxQ0ZFMCI+PC9zdG9wPgoJCTwvbGluZWFyR3JhZGllbnQ+CgkJPGxpbmVhckdyYWRpZW50CgkJCWlkPSJsb2dvX2dyYWRpZW50X3R3byIKCQkJeDE9IjM1IgoJCQl5MT0iMTEuMjgyIgoJCQl4Mj0iMzUiCgkJCXkyPSIyOC43MiIKCQkJZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiCgkJPgoJCQk8c3RvcCBzdG9wLWNvbG9yPSIjMDA0OEU1Ij48L3N0b3A+CgkJCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzlCNjZGRiI+PC9zdG9wPgoJCTwvbGluZWFyR3JhZGllbnQ+Cgk8L2RlZnM+Cjwvc3ZnPg=="
// 				/>
// 			</picture>
// 			<span className="font-bold text-xl font-poppins text-slate-700 dark:text-white text-ellipsis mx-1.5">
// 				Plagiarism
// 			</span>
// 		</div>
// 	);
// }
