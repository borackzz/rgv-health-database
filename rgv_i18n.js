/* =====================================================================
 * RGV Health Atlas — BILINGUAL LAYER (Tier 4, added 2026-07)
 * EN/ES internationalization. This file holds ONLY the translation
 * dictionaries; the render engine (LT(), fmt*, Tlabel(), applyStaticI18n(),
 * setLang()) lives in rgv_health_atlas.html and reads these globals.
 *
 * TWO dictionaries:
 *   UI  — keyed UI-"chrome" strings (buttons, labels, headings, notes,
 *         table headers, legends, tooltips, status messages). {en, es}.
 *   ES  — Spanish OVERRIDES for the data-layer content in rgv_data.js
 *         (DATA labels, NAR, DEEP, glossary, MORT/MATINF/CANCER/INFECT/
 *         ENVIRO/BINJ/CAPACITY/VITAL labels & notes, SDOH, CARE, static
 *         HTML blocks). English stays the source of truth in rgv_data.js;
 *         ES mirrors its keys. A missing ES key falls back to English and
 *         is tracked in the human-review list (see REVIEW_TODO / Methods).
 *
 * TRANSLATION STATUS: the Spanish below is a careful plain-language,
 * health-literacy-register first draft in RGV (Mexican) Spanish. It is
 * NOT yet verified by a bilingual public-health reviewer and MUST be
 * before public use. Every content string is considered "needs review".
 * See rgv_i18n_review.md for the reviewer worklist.
 * ===================================================================== */

/* Strings still awaiting Spanish (fall back to English at runtime, flagged). */
const I18N_UNTRANSLATED = [];

/* ---------------- UI CHROME ---------------- */
const UI = {
  /* language toggle + global */
  "lang.toggle.label":{en:"Language",es:"Idioma"},
  "lang.en":{en:"English",es:"Inglés"},
  "lang.es":{en:"Spanish",es:"Español"},
  "lang.switchToEs":{en:"Cambiar a español",es:"Cambiar a español"},
  "lang.switchToEn":{en:"Switch to English",es:"Switch to English"},
  "lang.reviewBadge":{en:"Spanish — draft pending bilingual review",es:"Español — borrador pendiente de revisión bilingüe"},

  /* map settings / sidebar controls */
  "ctl.mapSettings":{en:"Map settings",es:"Ajustes del mapa"},
  "ctl.mapControls":{en:"Map controls",es:"Controles del mapa"},
  "ctl.measure":{en:"Measure",es:"Indicador"},
  "ctl.geography":{en:"Geography",es:"Geografía"},
  "ctl.county":{en:"County",es:"Condado"},
  "ctl.tract":{en:"Census tract (live)",es:"Sector censal (en vivo)"},
  "ctl.rate":{en:"Rate",es:"Tasa"},
  "ctl.crude":{en:"Crude",es:"Cruda"},
  "ctl.adjusted":{en:"Age-adjusted",es:"Ajustada por edad"},
  "ctl.rateNote":{en:"Age-adjusted to the 2000 U.S. standard population. The Valley skews young, so age-adjusted rates run higher than crude for most conditions.",es:"Ajustada a la población estándar de EE. UU. del año 2000. El Valle es una población joven, así que la tasa ajustada por edad resulta más alta que la cruda en la mayoría de las condiciones."},
  "ctl.bivariate":{en:"Bivariate",es:"Bivariado"},
  "ctl.bivOff":{en:"— off —",es:"— apagado —"},
  "ctl.outcome":{en:"Outcome & vital layer",es:"Capa de desenlaces y estadísticas vitales"},
  "ctl.outcomeOff":{en:"— off (PLACES measure above) —",es:"— apagado (indicador PLACES de arriba) —"},
  "ctl.grpMortality":{en:"Mortality (county)",es:"Mortalidad (condado)"},
  "ctl.grpMatinf":{en:"Maternal & infant (county)",es:"Materno-infantil (condado)"},
  "ctl.grpLifeexp":{en:"Life expectancy (tract)",es:"Esperanza de vida (sector)"},
  "ctl.outcomeNote":{en:"Vital-statistics & registry layers. County choropleths use real age-adjusted rates; life expectancy renders by census tract. Not CDC PLACES — the crude/age-adjusted and bivariate controls don't apply.",es:"Capas de estadísticas vitales y de registro. Los mapas por condado usan tasas reales ajustadas por edad; la esperanza de vida se muestra por sector censal. No son de CDC PLACES: los controles de cruda/ajustada y bivariado no aplican."},
  "ctl.facilities":{en:"Health facilities",es:"Servicios de salud"},
  "ctl.facilitiesSub":{en:"(hospitals & FQHCs)",es:"(hospitales y centros FQHC)"},
  "ctl.facilitiesNote":{en:"Optional point layer of real, named clinics & hospitals (approximate locations). Willacy County has no hospital. Overlays on any map view; never blocks the base map.",es:"Capa opcional de puntos con clínicas y hospitales reales por nombre (ubicaciones aproximadas). El condado de Willacy no tiene hospital. Se superpone a cualquier vista del mapa y nunca bloquea el mapa base."},
  "ctl.csv":{en:"CSV",es:"CSV"},
  "ctl.mapPng":{en:"Map PNG",es:"Mapa PNG"},
  "ctl.printPdf":{en:"Print/PDF",es:"Imprimir/PDF"},

  /* section nav (tabs) */
  "nav.header":{en:"Sections — upstream → downstream",es:"Secciones — de causas a desenlaces"},
  "nav.start":{en:"Start here",es:"Comience aquí"},
  "nav.determinants":{en:"2 · Determinants & context",es:"2 · Determinantes y contexto"},
  "nav.risk":{en:"3 · Risk factors & behaviors",es:"3 · Factores de riesgo y conductas"},
  "nav.conditions":{en:"4 · Conditions",es:"4 · Condiciones"},
  "nav.mortality":{en:"5 · Complications & mortality",es:"5 · Complicaciones y mortalidad"},
  "nav.response":{en:"6 · System response",es:"6 · Respuesta del sistema"},
  "nav.trajectory":{en:"Trajectory",es:"Trayectoria"},
  "nav.data":{en:"Data table",es:"Tabla de datos"},
  "nav.glossary":{en:"Glossary",es:"Glosario"},
  "nav.methods":{en:"Methods & sources",es:"Métodos y fuentes"},

  /* sidebar blocks */
  "side.fourCounties":{en:"The four counties",es:"Los cuatro condados"},
  "side.regionTotal":{en:"Region total (adults 18+)",es:"Total de la región (adultos 18+)"},
  "side.dataSources":{en:"Data & sources",es:"Datos y fuentes"},

  /* map + comparison cards */
  "map.title.prev":{en:"Prevalence by county",es:"Prevalencia por condado"},
  "cmp.title":{en:"County comparison",es:"Comparación entre condados"},
  "cmp.sub":{en:"Selected measure vs. Texas & U.S. reference",es:"Indicador seleccionado vs. referencia de Texas y EE. UU."},
  "cmp.ciNote":{en:"County differences may not be statistically distinguishable where 95% CIs overlap — especially for the two smallest counties, Starr and Willacy. Compare the CIs, not just the point estimates.",es:"Las diferencias entre condados pueden no ser estadísticamente distinguibles cuando los intervalos de confianza (95%) se traslapan — sobre todo en los dos condados más pequeños, Starr y Willacy. Compare los intervalos, no solo los valores puntuales."},

  /* social-driver card rows */
  "sd.poverty":{en:"Poverty",es:"Pobreza"},
  "sd.income":{en:"Median income",es:"Ingreso medio"},
  "sd.uninsured":{en:"Uninsured 18–64",es:"Sin seguro 18–64"},
  "sd.food":{en:"Food insecurity",es:"Inseguridad alimentaria"},
  "sd.svi":{en:"SVI percentile",es:"Percentil SVI"},
  "sd.th":{en:"th",es:"º"},
  "sd.socvuln":{en:"Social vulnerability",es:"Vulnerabilidad social"},

  /* coordinated selection + chart interaction (2026-07 interactivity pass) */
  "sel.clear":{en:"✕ Clear county selection",es:"✕ Quitar selección de condado"},
  "sel.hint":{en:"Click a county on the map or a bar to focus it everywhere.",es:"Haga clic en un condado del mapa o en una barra para destacarlo en todas las gráficas."},
  "sort.default":{en:"Order: map order",es:"Orden: original"},
  "sort.desc":{en:"Order: high → low",es:"Orden: mayor → menor"},
  "sort.asc":{en:"Order: low → high",es:"Orden: menor → mayor"},
  "chart.suppressed":{en:"suppressed",es:"suprimido"},
  "chart.crude":{en:"Crude",es:"Cruda"},
  "chart.adj":{en:"Age-adjusted",es:"Ajustada por edad"},
  "chart.usRef":{en:"US",es:"EE. UU."},
  "chart.txRef":{en:"TX",es:"TX"},
  "rk.spread":{en:"County spread",es:"Dispersión por condado"},

  /* scatter (Task 4) */
  "sc.xaxis":{en:"Tract uninsured 18–64 (%)",es:"Sector: sin seguro 18–64 (%)"},
  "sc.tract":{en:"Census tract",es:"Sector censal"},
  "sc.acrossTracts":{en:"Across {n} census tracts,",es:"En {n} sectores censales,"},
  "sc.pearson":{en:"the Pearson correlation is",es:"la correlación de Pearson es"},
  "sc.forMeasure":{en:"for {m}",es:"para {m}"},
  "sc.ecoInline":{en:"This is an ecological (neighborhood-level) association — it does not prove causation in individuals.",es:"Es una asociación ecológica (a nivel de vecindario) — no prueba causalidad en individuos."},
  "sc.negligible":{en:"negligible",es:"insignificante"},
  "sc.weak":{en:"weak",es:"débil"},
  "sc.moderate":{en:"moderate",es:"moderada"},
  "sc.strong":{en:"strong",es:"fuerte"},
  "sc.positive":{en:"positive",es:"positiva"},
  "sc.negative":{en:"negative",es:"negativa"},
  "sc.offlineTitle":{en:"Live tract data unavailable.",es:"Datos por sector no disponibles."},
  "sc.offlineBody":{en:"Showing the four county points instead — an illustrative, underpowered view (n = 4), not a correlation claim. Reconnect to load the hundreds-of-tracts version.",es:"Se muestran los cuatro puntos por condado — una vista ilustrativa y de poca potencia (n = 4), no una afirmación de correlación. Reconéctese para cargar la versión con cientos de sectores."},

  /* generic table headers reused across regional tables */
  "th.measure":{en:"Measure",es:"Indicador"},
  "th.lowerRgv":{en:"Lower RGV",es:"Valle bajo (LRGV)"},
  "th.southTx":{en:"South TX",es:"Sur de TX"},
  "th.texas":{en:"Texas",es:"Texas"},
  "th.us":{en:"U.S.",es:"EE. UU."},
  "th.vintage":{en:"Vintage",es:"Periodo"},
  "th.signal":{en:"Signal",es:"Señal"},
  "sig.above":{en:"above US / state",es:"por encima de EE. UU. / estado"},
  "sig.below":{en:"below US / state",es:"por debajo de EE. UU. / estado"},
  "sig.near":{en:"near US / state",es:"cerca de EE. UU. / estado"},

  /* care finder (Tier 4) */
  "cf.h":{en:"Find care near you",es:"Encuentre atención cerca de usted"},
  "cf.need":{en:"What do you need?",es:"¿Qué necesita?"},
  "cf.area":{en:"Where are you?",es:"¿Dónde se encuentra?"},
  "cf.zip":{en:"…or enter a ZIP code",es:"…o escriba un código postal"},
  "cf.geo":{en:"Use my location",es:"Usar mi ubicación"},
  "cf.helpLines":{en:"Statewide help lines",es:"Líneas de ayuda estatales"},
  "cf.pickLoc":{en:"Pick your area or enter a ZIP above to see nearby sites.",es:"Elija su zona o escriba un código postal para ver sitios cercanos."},
  "cf.showing":{en:"Showing",es:"Mostrando"},
  "cf.nearBy":{en:"near",es:"cerca de"},
  "cf.details":{en:"Details, hours & phone",es:"Detalles, horarios y teléfono"},
  "cf.none":{en:"No matching sites found nearby.",es:"No se encontraron sitios cercanos."},
  "cf.choose":{en:"Choose your area…",es:"Elija su zona…"},
  "cf.zipUnknown":{en:"That ZIP isn't in the Valley list — pick your area from the menu instead.",es:"Ese código postal no está en la lista del Valle; elija su zona en el menú."},
  "cf.geoNo":{en:"Location isn't available in this browser.",es:"La ubicación no está disponible en este navegador."},
  "cf.geoWait":{en:"Finding your location…",es:"Buscando su ubicación…"},
  "cf.yourLoc":{en:"your location",es:"su ubicación"},
  "cf.geoFail":{en:"Couldn't get your location — enter a ZIP or pick your area.",es:"No se pudo obtener su ubicación; escriba un código postal o elija su zona."}
};

/* ---------------- CONTENT OVERRIDES (Spanish) ---------------- */
/* Mirrors rgv_data.js structure. English remains the source of truth. */
const ES = {
  DATA:{}, NAR:{}, DEEP:{}, static:{}, glossary:{},
  MORT:{causes:{}}, MATINF:{metrics:{}}, CANCER:{sites:{}},
  INFECT:{rows:{},meta:{}}, ENVIRO:{rows:{},meta:{}}, BINJ:{rows:{},meta:{}},
  CAPACITY:{meta:{}}, VITAL:{}, CARE:{}
};
