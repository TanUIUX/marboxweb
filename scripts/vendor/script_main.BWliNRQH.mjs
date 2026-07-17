import { t as e } from "./rolldown-runtime.DhnBybyj.mjs";
import {
  F as t,
  L as n,
  M as r,
  N as i,
  O as a,
  P as o,
  R as s,
  S as c,
  _ as l,
  a as u,
  h as d,
  i as f,
  m as p,
  n as m,
  p as h,
  r as g,
  t as _,
  u as v,
  w as y,
  z as b,
} from "./react.BOGI1M1I.mjs";
import {
  Et as x,
  G as S,
  J as C,
  K as w,
  Tt as T,
  Y as E,
  Z as D,
  _ as O,
  d as k,
  et as A,
  h as j,
  it as M,
  m as N,
  mt as P,
  nt as F,
  q as I,
  s as L,
  st as R,
  v as z,
  vt as B,
} from "./framer.CnBEsqaO.mjs";
import { b as V, y as H } from "./shared-lib.Des-fux9.mjs";
function U({ webPageId: e, children: t, style: n, ...r }) {
  let i = {}[e] ?? {};
  switch (e) {
    case `augiA20Il`:
      return v(H, { ...i, key: `Template1`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function W(e) {
  switch (e) {
    case `augiA20Il`:
      return [
        { hash: `18hhxe7`, mediaQuery: `(max-width: 809.98px)` },
        { hash: `1r1jnuh`, mediaQuery: `(min-width: 810px) and (max-width: 1439.98px)` },
        { hash: `scrxsg`, mediaQuery: `(min-width: 1440px)` },
      ];
    default:
      return;
  }
}
async function G({ routeId: e, pathVariables: n, localeId: s, collectionItemId: l }) {
  let u = J[e].page.preload(),
    p = v(O, {
      children: v(k, {
        children: v(j, {
          children: v(z, {
            isWebsite: !0,
            environment: `site`,
            routeId: e,
            pathVariables: n,
            routes: J,
            collectionUtils: X,
            framerSiteId: Z,
            notFoundPage: E(() => import(`./SitesNotFoundPage.js@1.4.BwdtF4Np.mjs`)),
            isReducedMotion: void 0,
            localeId: s,
            locales: Y,
            preserveQueryParams: void 0,
            siteCanonicalURL: `https://marbox.framer.website`,
            EditorBar:
              b === void 0
                ? void 0
                : (() => {
                    if ($) {
                      console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                      return;
                    }
                    return E(async () => {
                      b.__framer_editorBarDependencies = {
                        __version: 3,
                        framer: { useCurrentRoute: R, useLocaleInfo: P, useRouter: B },
                        react: {
                          createElement: v,
                          Fragment: o,
                          memo: d,
                          useCallback: r,
                          useEffect: i,
                          useRef: a,
                          useState: t,
                          useLayoutEffect: c,
                        },
                        "react-dom": { createPortal: f },
                      };
                      let { createEditorBar: e } = await import(`./init.mjs`);
                      return { default: e() };
                    });
                  })(),
            adaptLayoutToTextDirection: !0,
            LayoutTemplate: U,
            loadSnippetsModule: new N(
              () => import(`./3-r2jqhaYIaPln4p5PV-_g7Uc8CkzdzIGv2f0m7zcIE.DMQ3TD_D.mjs`)
            ),
            initialCollectionItemId: l,
          }),
          value: {
            autobahnNavigation: !0,
            disableCustomCode: !1,
            editorBarDisableFrameAncestorsSecurity: !1,
            motionDivToDiv: !1,
            onPageLocalizationSupport: !0,
            onPageMoveTool: !0,
            synchronousNavigationOnDesktop: !1,
            yieldOnTap: !1,
          },
        }),
      }),
      value: {
        global: {
          enter: {
            mask: { angle: 0, type: `wipe`, width: `0%` },
            opacity: 0,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 0.4,
              ease: [0.27, 0, 0.51, 1],
              mass: 1,
              stiffness: 400,
              type: `tween`,
            },
            x: `0px`,
            y: `0px`,
          },
        },
        routes: {},
      },
    });
  return (await u, p);
}
function K() {
  Q && b.__framer_events.push(arguments);
}
async function q(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || b.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    K(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = A(J, r)));
    else {
      A(J, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = S(J, decodeURIComponent(location.pathname), !0, Y);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let c = G({ routeId: r, localeId: i, pathVariables: a, collectionItemId: s?.collectionItemId });
    b !== void 0 &&
      (async () => {
        let e = J[r],
          t = Y.find(({ id: e }) => (i ? e === i : e === `default`)).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && X) {
          let r = await X[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          c = o.timeZone,
          l = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          b.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Z ?? null,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: b.location.href,
              hostname: b.location.hostname || null,
              pathname: b.location.pathname || null,
              hash: b.location.hash || null,
              search: b.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await x({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let u = await c;
    e
      ? (T(`framer-rewrite-breakpoints`, () => {
          (F(o), b.__framer_onRewriteBreakpoints?.(o));
        }),
        ($ ? (e) => e() : l)(() => {
          (D(), M(), _(t, u, { onRecoverableError: n }));
        }))
      : g(t, { onRecoverableError: n }).render(u);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var J, Y, X, Z, Q, $;
e(() => {
  if (
    (n(),
    I(),
    y(),
    u(),
    m(),
    V(),
    (J = {
      augiA20Il: {
        elements: { DyoOEUBtx: `teatimonial` },
        page: E(() => import(`./b7o1WAHDBhs_17PM9wXSD8mHUJf59g_uepxjjwM7Uq0.DLUD8x8k.mjs`)),
        path: `/`,
      },
    }),
    (Y = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (X = {}),
    (Z = `f8f48c034ae672b52bcf37c4be845ca6cc80f85b159fa89b13f3f0b5c5bb5595`),
    (Q = typeof document < `u`),
    ($ = Q && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(s.userAgent)),
    Q)
  ) {
    ((b.__framer_importFromPackage = (e, t) => () =>
      v(L, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (b.__framer_events = b.__framer_events || []),
      w(),
      C());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? q(!0, e) : q(!1, e);
  }
  (function () {
    Q &&
      l(() => {
        let e = document.getElementById(`__framer-badge-container`);
        e && _(
          e,
          v(p, {}, v(h(() => import(`./PX9hIOIVM.CwZbMb4h.mjs`))))
        );
      });
  })();
})();
export { W as getLayoutTemplateBreakpoints, G as getPageRoot };
//# sourceMappingURL=script_main.BWliNRQH.mjs.map
