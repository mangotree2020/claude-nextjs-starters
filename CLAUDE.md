# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 명령어

```bash
npm run dev      # 개발 서버 (localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 검사
```

테스트 설정 없음. UI 변경 시 직접 브라우저에서 확인.

shadcn 컴포넌트 추가:
```bash
npx shadcn add <component>
```

## 핵심 기술 스택

- **Next.js 16** + React 19 — App Router, RSC 기본값
- **TailwindCSS v4** — `@import "tailwindcss"` 방식 (기존 `@tailwind` 지시어 사용 금지)
- **shadcn UI** — `radix-nova` 스타일, Lucide 아이콘
- **OKLCH 색상 시스템** — CSS 변수로 정의된 테마 토큰 (`globals.css`)

## 아키텍처

### 라우트 구조

두 개의 라우트 그룹으로 분리:

- `app/(marketing)/` — 랜딩 페이지 레이아웃 (헤더+푸터)
- `app/(dashboard)/dashboard/` — 대시보드 레이아웃 (사이드바+헤더)

`app/layout.tsx`는 루트 레이아웃으로 `ThemeProvider`, `TooltipProvider`, `Toaster`를 전역 제공.

### 컴포넌트 구조

```
components/
  ui/          # shadcn 원시 컴포넌트 (직접 수정 가능)
  layout/      # 레이아웃 컴포넌트 (sidebar, header, breadcrumb 등)
  dashboard/   # 대시보드 전용 컴포넌트
  sections/    # 마케팅 페이지 섹션 (hero, features, cta)
  shared/      # 공통 유틸리티 컴포넌트 (empty-state, loading-spinner 등)
  providers/   # React 프로바이더
```

### 데이터 및 타입

- `lib/constants.ts` — 모든 정적 데이터와 설정 (nav, sidebar, 대시보드 통계 등)
- `types/index.ts` — 공유 TypeScript 인터페이스
- `lib/utils.ts` — `cn()` 유틸리티 (clsx + tailwind-merge)

아이콘은 Lucide 아이콘 이름을 문자열로 `constants.ts`에 저장하고 컴포넌트에서 동적으로 렌더링.

### 테마

`next-themes`로 시스템/라이트/다크 모드 지원. 색상 토큰은 `app/globals.css`의 `:root`와 `.dark`에서 OKLCH로 정의.
