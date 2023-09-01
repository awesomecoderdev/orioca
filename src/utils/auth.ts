"use client";
import { firebase } from "./firebase";
import axios from "./axios";
import { toast } from "sonner";
import useSWR from "swr";

interface AuthUserContextType {
	Provider: any;
}

interface CurrentAuthContextType {
	user: any;
}

type Props = {
	children: React.ReactNode;
	cookie: object | any;
};

export default function useNextAuth() {
	const {
		data,
		error,
		mutate,
	}: {
		data: any;
		error: any;
		mutate: any;
	} = useSWR(
		"/api/auth/session",
		() =>
			axios
				.post("/api/auth/session")
				.then((response) => response.data.data.user),
		{
			refreshInterval: 30000,
			dedupingInterval: 30000,
		}
	);

	return {
		error,
		user: data,
	};
}
