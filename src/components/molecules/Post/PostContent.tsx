"use client";
//External Libs
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import styled from "styled-components";

//Components
import Box from "@/components/atoms/Box/Box";
import { PostMarkdownStyles } from "./PostMarkdownStyles";

interface PostContentProps {
    content: string;
}

export const MarkdownWrapper = styled.div`
  width: 100%;

  ${PostMarkdownStyles}
`;

export default function PostContent({ content }: PostContentProps){
    const normalizedMarkdown = content
        .replace(/\\r\\n/g, "\n")
        .replace(/\r\n/g, "\n");

    return(
        <Box
            tag="article"
            styleSheet={{
                width: { xs: "100%", md: "80%" },
                padding: { xs: "0px 24px", md: "0px 120px" },
                marginBottom: "24px",
                display: "flex",
                justifyContent: "start",
            }}>
                <MarkdownWrapper>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {normalizedMarkdown}
                    </ReactMarkdown>
                </MarkdownWrapper>
        </Box>
    )
}

//TODO: adicionar estilização para o markdown [x]

// TODO: ajustar os espaçamentos do texto 