/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
//Styles
import { TypographyVariants } from '@/theme/theme';
import styled from 'styled-components';
import { StyleSheet } from '@/theme/StyleSheet';

//Components
import Text from '../Text/Text';

import React from 'react';
import { useRouter } from 'next/navigation';


/**
 * ButtonBase
 * - Efeito ripple sem dependência externa
 * - Usa elementos <span> posicionados absolutamente e animação CSS
 * - Suporta pointer (mouse/touch) e teclado (Enter / Space)
 */

interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    textVariant?: TypographyVariants;
    children?: React.ReactNode;
    rippleColor?: string;
    styleSheet?: StyleSheet;
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
}

const StyledButton = styled(Text)<any>`
  /* garante stacking e clipping para o ripple */
  position: relative;
  overflow: hidden;
  display: inline-flex; /* preserve comportamento do Text, ajuste se necessário */
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  border: none;
  text-decoration: none;
  padding: 0; /* Text/tema normalmente define padding; ajuste conforme seu design */

  /* ripple spans criados dinamicamente */
  & .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    pointer-events: none;
    will-change: transform, opacity;
    opacity: 0.6;
    animation: ripple-anim 650ms cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  @keyframes ripple-anim {
    to {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

export default function ButtonBase({ 
    textVariant,
    rippleColor,
    children,
    onPointerDown,
    onKeyDown,
    styleSheet = {},
    href,
    ...props
}: ButtonBaseProps){
    const ref = React.useRef<HTMLButtonElement | null>(null);
    const router = useRouter();

  // remove ripples velhas caso existam (proteção)
  const cleanupOldRipples = (container: HTMLElement) => {
    const old = container.querySelectorAll("span[data-ripple]");
    if (old.length > 6) {
      // mantém apenas alguns
      Array.from(old)
        .slice(0, old.length - 6)
        .forEach((el) => el.remove());
    }
  };

  const createRipple = (
    ev: React.PointerEvent<HTMLButtonElement> | { clientX?: number; clientY?: number } | null,
    center = false
  ) => {
    const button = ref.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();

    let x = rect.width / 2;
    let y = rect.height / 2;

    if (!center && ev && "clientX" in ev && typeof ev.clientX === "number") {
      x = ev.clientX! - rect.left;
      y = ev.clientY! - rect.top;
    }

    // tamanho suficiente para cobrir todo o botão (diagonal)
    const maxDim = Math.max(rect.width, rect.height);
    const size = Math.ceil(maxDim * 2);

    const ripple = document.createElement("span");
    ripple.setAttribute("data-ripple", "true");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x - size / 2}px`;
    ripple.style.top = `${y - size / 2}px`;
    ripple.style.background = rippleColor ?? "rgba(0, 0, 0, 0.247)"; // cor default (talvez personalizar dinamicamente no futuro?)

    // anexa e remove no fim da animação
    button.appendChild(ripple);
    cleanupOldRipples(button);

    const remove = () => {
      ripple.removeEventListener("animationend", remove);
      if (ripple.parentElement) ripple.parentElement.removeChild(ripple);
    };
    ripple.addEventListener("animationend", remove);

    // Fallback para garantir remoção caso animationend não dispare
    window.setTimeout(() => {
      if (ripple.parentElement) ripple.parentElement.removeChild(ripple);
    }, 1000);
  };

  // pointer (mouse/touch) handler
  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    // chama o ripple localmente antes de propagar
    createRipple(e, false);
    if (onPointerDown) onPointerDown(e);
  };

  // teclado: Enter / Space -> ripple no centro
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const key = e.key;
    if (key === " " || key === "Spacebar" || key === "Enter") {
      // para evitar comportamento duplicado do "space" em alguns browsers,
      // não chamamos preventDefault aqui para não quebrar o comportamento nativo do button.
      createRipple(null, true);
    }
    if (onKeyDown) onKeyDown(e);
  };

  const isLink = Boolean(href && href.length > 0);
  const Tag = isLink ? "a" : "button";

  return (
    <StyledButton
      ref={ref}
      tag={Tag}
      onPointerDown={handlePointerDown}
      onKeyDown={handleKeyDown}
      variant={textVariant}
      {...props}
      href={href}
      styleSheet={{
        backgroundColor: 'transparent',
        color: 'inherit',
        outline: '0',
        border: '0',
        ...styleSheet
      }}
      onClick={(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        // Se for link e houver href válido, prevenir o comportamento nativo e navegar
        if (isLink && href) {
          event.preventDefault();
          router.push(href);
          return;
        }

        // Caso não seja link, delega ao onClick passado via props (se houver)
        if (!isLink && typeof props.onClick === 'function') {
          props.onClick(event);
        }
      }}
    >
      {children}
    </StyledButton>
  );
};