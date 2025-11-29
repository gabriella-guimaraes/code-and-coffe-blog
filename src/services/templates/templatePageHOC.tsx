/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from "next/head";
import { JSX } from "react";
import type { Metadata } from "next";

import { withTemplateConfig, type TemplateConfig } from "./withTemplateConfig";

interface TemplatePageHOCProps {
    title?: string;
}

// FÁBRICA que o page.tsx vai chamar/ re-exportar.
// Retorna uma função compatível com `generateMetadata` do Next.
export function createGenerateMetadata(pageTitle?: string) {
  return async function generateMetadata(): Promise<Metadata> {
    // withTemplateConfig já leu o template-config.yml e é assíncrono
    const { templateConfig } = await withTemplateConfig();
    const siteTitle = templateConfig?.site?.title ?? "Code & Coffee Blog";
    const fullTitle = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

    return {
      title: fullTitle,
      description: templateConfig?.site?.description ?? undefined,
    };
  };
}

// HOC que monta as props que o template visual pode usar.
// NÃO manipula <head> — isso é trabalho do generateMetadata.
export default function templatePageHOC(
  Component: (props: any) => JSX.Element,
  templatePageHOCProps: TemplatePageHOCProps = {}
) {
  return function WrappedComponent(props: { templateConfig: TemplateConfig }) {
    const siteTitle = props.templateConfig?.site?.title ?? "";
    const pageTitle = templatePageHOCProps?.title ?? "";
    const fullTitle = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

    // Passa pageTitle e fullTitle para o componente (opcional, útil para render UI)
    return <Component {...props} pageTitle={pageTitle} fullTitle={fullTitle} />;
  };
}