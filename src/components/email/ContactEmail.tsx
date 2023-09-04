import {
	Body,
	Button,
	Container,
	Head,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
	name?: string;
	email?: string;
	message?: string;
	subject?: string;
}

export const ContactEmail = ({
	name = "Unknown",
	email = "examle@domain.com",
	subject = "Hello Ibrahim",
	message = "Said something.",
}: ContactEmailProps) => (
	<Html>
		<Head />
		<Preview>{subject}</Preview>
		<Body style={main}>
			<Container style={container}>
				<Text style={title}>
					Replay to{" "}
					<Link href={`mailto:${email}`}>
						<strong>@{name}</strong>
					</Link>{" "}
					, fort contact his {email}.
				</Text>

				<Section style={section}>
					<Text style={text}>{message}</Text>
				</Section>
			</Container>
		</Body>
	</Html>
);

export default ContactEmail;

const main = {
	backgroundColor: "#ffffff",
	color: "#24292e",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
	width: "480px",
	margin: "0 auto",
	padding: "20px 0 48px",
};

const title = {
	fontSize: "24px",
	lineHeight: 1.25,
};

const section = {
	padding: "24px",
	border: "solid 1px #dedede",
	borderRadius: "5px",
	textAlign: "center" as const,
};

const text = {
	margin: "0 0 10px 0",
	textAlign: "left" as const,
};

const button = {
	fontSize: "14px",
	backgroundColor: "#28a745",
	color: "#fff",
	lineHeight: 1.5,
	borderRadius: "0.5em",
	padding: "0.75em 1.5em",
};

const links = {
	textAlign: "center" as const,
};

const link = {
	color: "#0366d6",
	fontSize: "12px",
};

const footer = {
	color: "#6a737d",
	fontSize: "12px",
	textAlign: "center" as const,
	marginTop: "60px",
};
