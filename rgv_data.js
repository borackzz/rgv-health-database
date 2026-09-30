/* =====================================================================
 * RGV Health Atlas — DATA FILE (the database)
 * Edit THIS file to update the atlas; the app (rgv_health_atlas.html)
 * reads everything below. See DATA_DICTIONARY.md for the schema.
 * Loaded as a classic <script>, so values are shared with the app.
 * ===================================================================== */

const RGV_META={
  schema_version:"1.0",
  county_release:"CDC PLACES 2025 release (BRFSS 2023)",
  tract_release:"CDC PLACES 2025 release (BRFSS 2023)",
  sdoh_vintage:"Census SAIPE 2024 (poverty) · ACS 2020–2024 (income) · Feeding America Map the Meal Gap 2025, 2023 data (food) · CDC/ATSDR SVI 2022",
  benchmark_note:"U.S. = CDC PLACES national estimate; Texas = adult-population-weighted average of the Texas county estimates in the same PLACES release (computed for this atlas).",
  last_updated:"2026-09",
  measure_value_order:["crude_prev","age_adjusted_prev","ci_low","ci_high"]
};

/* ===== COUNTY DATA — CDC PLACES 2025 release (BRFSS 2023; data.cdc.gov swc5-untb). v = [crudePrev, adjPrev, ciLo, ciHi] (crude CI).
   us = PLACES national crude estimate; tx = adult-population-weighted mean of Texas county crude estimates (same release). ===== */
const COUNTIES={
 "48061":{name:"Cameron",pop:426710,pop18:306297,seat:"Brownsville"},
 "48215":{name:"Hidalgo",pop:898471,pop18:624451,seat:"Edinburg / McAllen"},
 "48427":{name:"Starr",pop:65934,pop18:44621,seat:"Rio Grande City"},
 "48489":{name:"Willacy",pop:20037,pop18:15371,seat:"Raymondville"}};
const DATA={
 diabetes:{label:"Diagnosed diabetes",grp:"Chronic disease",domain:"Cardiometabolic",spineStage:"conditions",us:12.0,tx:12.7,mid:"DIABETES",
  v:{"48061":[18.3,17.5,16.3,20.6],"48215":[17.4,17.7,15.3,19.6],"48427":[20.0,20.5,17.6,22.6],"48489":[18.8,19.0,16.3,21.3]}},
 obesity:{label:"Obesity (BMI ≥30)",grp:"Chronic disease",domain:"Cardiometabolic",spineStage:"conditions",us:32.8,tx:35.6,mid:"OBESITY",
  v:{"48061":[40.3,41.0,35.4,45.0],"48215":[44.2,45.0,39.5,49.3],"48427":[45.0,45.8,36.4,53.6],"48489":[43.2,44.4,34.1,52.7]}},
 bphigh:{label:"High blood pressure",grp:"Chronic disease",domain:"Cardiometabolic",spineStage:"conditions",us:34.4,tx:33.1,mid:"BPHIGH",
  v:{"48061":[34.0,32.9,31.0,37.1],"48215":[33.4,34.1,30.4,36.6],"48427":[36.6,37.5,32.5,40.8],"48489":[36.5,36.9,32.2,41.0]}},
 highchol:{label:"High cholesterol",grp:"Chronic disease",domain:"Cardiometabolic",spineStage:"conditions",us:37.4,tx:35.1,mid:"HIGHCHOL",
  v:{"48061":[36.5,33.5,33.2,39.7],"48215":[35.3,33.7,32.1,38.7],"48427":[37.2,35.2,33.0,41.4],"48489":[36.4,34.1,32.0,40.9]}},
 chd:{label:"Coronary heart disease",grp:"Chronic disease",domain:"Cardiometabolic",spineStage:"conditions",us:6.4,tx:5.6,mid:"CHD",
  v:{"48061":[7.1,6.5,6.2,8.1],"48215":[6.5,6.6,5.7,7.5],"48427":[7.6,7.8,6.6,8.6],"48489":[7.7,7.5,6.7,8.7]}},
 stroke:{label:"Stroke",grp:"Chronic disease",domain:"Cardiometabolic",spineStage:"conditions",us:3.4,tx:3.2,mid:"STROKE",
  v:{"48061":[3.9,3.6,3.4,4.4],"48215":[3.6,3.7,3.2,4.1],"48427":[4.2,4.4,3.7,4.8],"48489":[4.2,4.2,3.7,4.7]}},
 copd:{label:"COPD",grp:"Chronic disease",domain:"Respiratory",spineStage:"conditions",us:6.2,tx:5.7,mid:"COPD",
  v:{"48061":[6.2,5.9,5.2,7.4],"48215":[5.9,6.0,4.9,7.0],"48427":[7.2,7.3,5.9,8.4],"48489":[7.2,7.1,6.0,8.3]}},
 casthma:{label:"Current asthma",grp:"Chronic disease",domain:"Respiratory",spineStage:"conditions",us:9.8,tx:9.5,mid:"CASTHMA",
  v:{"48061":[8.7,8.7,7.6,9.8],"48215":[8.7,8.7,7.7,9.9],"48427":[9.3,9.3,8.2,10.6],"48489":[8.9,8.9,7.8,10.1]}},
 cancer:{label:"Cancer (excl. skin)",grp:"Chronic disease",domain:"Cancer",spineStage:"conditions",us:7.9,tx:6.1,mid:"CANCER",
  v:{"48061":[4.9,4.6,4.4,5.4],"48215":[4.4,4.5,4.0,4.9],"48427":[4.1,4.2,3.6,4.5],"48489":[4.6,4.5,4.1,5.2]}},
 arthritis:{label:"Arthritis",grp:"Chronic disease",domain:"Cardiometabolic",spineStage:"conditions",us:25.4,tx:21.6,mid:"ARTHRITIS",
  v:{"48061":[20.1,19.0,17.9,22.4],"48215":[20.2,20.7,18.1,22.7],"48427":[22.4,23.0,19.6,25.3],"48489":[22.3,22.2,19.4,25.2]}},
 depression:{label:"Depression",grp:"Mental & behavioral",domain:"Behavioral health",spineStage:"conditions",us:20.2,tx:21.2,mid:"DEPRESSION",
  v:{"48061":[18.9,19.1,16.4,21.6],"48215":[20.2,20.0,17.6,23.3],"48427":[21.2,21.0,18.0,24.7],"48489":[19.5,19.4,16.3,23.0]}},
 mhlth:{label:"Frequent mental distress",grp:"Mental & behavioral",domain:"Behavioral health",spineStage:"conditions",us:15.6,tx:16.9,mid:"MHLTH",
  v:{"48061":[16.5,16.8,14.4,18.9],"48215":[18.2,18.0,15.8,20.8],"48427":[19.5,19.2,16.8,22.3],"48489":[18.4,18.3,16.0,20.8]}},
 ghlth:{label:"Fair or poor general health",grp:"Health status",domain:"Overall health status",spineStage:"complications",us:19.2,tx:21.8,mid:"GHLTH",
  v:{"48061":[31.2,30.9,26.5,36.2],"48215":[33.7,34.1,28.9,38.9],"48427":[40.3,40.8,34.4,46.3],"48489":[37.1,37.5,31.8,42.1]}},
 disability:{label:"Any disability",grp:"Health status",domain:"Overall health status",spineStage:"complications",us:30.0,tx:30.9,mid:"DISABILITY",
  v:{"48061":[37.0,36.1,32.2,41.9],"48215":[39.4,39.3,34.4,44.8],"48427":[45.5,45.3,39.0,51.7],"48489":[43.4,42.8,37.2,49.2]}},
 access2:{label:"Uninsured (adults 18–64)",grp:"Access & risk factors",domain:"Determinants",spineStage:"determinants",us:11.0,tx:19.1,mid:"ACCESS2",
  v:{"48061":[35.9,36.3,29.0,43.7],"48215":[37.4,37.5,29.7,45.3],"48427":[43.5,43.7,35.5,52.0],"48489":[40.8,40.7,33.6,47.8]}},
 lpa:{label:"No leisure physical activity",grp:"Access & risk factors",domain:"Risk factors & behaviors",spineStage:"risk",us:24.5,tx:27.8,mid:"LPA",
  v:{"48061":[36.9,36.8,31.8,42.2],"48215":[37.5,38.0,32.3,43.2],"48427":[47.0,47.6,40.1,54.1],"48489":[44.1,44.5,37.3,50.6]}},
 csmoking:{label:"Current smoking",grp:"Access & risk factors",domain:"Risk factors & behaviors",spineStage:"risk",us:11.4,tx:12.5,mid:"CSMOKING",
  v:{"48061":[13.0,13.6,10.4,15.8],"48215":[13.3,13.8,10.7,16.2],"48427":[16.9,17.6,13.6,20.3],"48489":[16.4,17.4,13.4,19.5]}}
};

/* social drivers — pov: % of all residents in poverty, Census SAIPE 2024 · mhi: median household income,
   ACS 2020–2024 5-yr (2024 dollars) — both via Census QuickFacts · food: % food insecure, Feeding America
   Map the Meal Gap 2025 (2023 data) via County Health Rankings 2026 update · svi: CDC/ATSDR SVI 2022 overall
   national percentile (latest release). */
const SDOH={
 "48061":{pov:24.3,mhi:52601,food:22.5,svi:0.96},
 "48215":{pov:24.2,mhi:54338,food:23.6,svi:0.97},
 "48427":{pov:35.4,mhi:37639,food:27.9,svi:1.00},
 "48489":{pov:24.2,mhi:54180,food:23.3,svi:0.98}};
/* reference values for the social drivers (different official series; shown as context only) */
const SDOH_REF={
 mhi:{tx:78476,us:80734,vintage:"ACS 2020–2024"},
 food:{tx:17.6,us:14.3,vintage:"Map the Meal Gap 2025 (2023 data)"}};

/* diabetes complications (Cureus 2024) */
const AMP={"48061":7.8,"48215":6.8,"48427":11.0,"48489":12.9};
const COST={"48061":1603.27,"48215":1892.45,"48427":2247.64,"48489":1938.45};

/* =====================================================================
 * TIER 1 — new outcome domains (real, county-level, per-cell provenance).
 * Added 2026-07. Every value carries source + vintage. Suppressed/
 * unavailable cells are labelled, never invented. See DATA_DICTIONARY.md.
 * ===================================================================== */

/* ---- MORTALITY: county age-standardized cause-specific death rates ----
 * Replaces the old 6-row regional MORT table. Each cause is a real,
 * county-level, mappable choropleth layer. `v` keyed by FIPS; a value of
 * "suppressed" (string) means small counts / not released. `ci:false`
 * where the source publishes no county CI. */
const MORT={
 meta:{
  standard:"Heart-disease and stroke death rates are age-standardized to the 2000 U.S. standard population (adults 35+, 3-year average); premature death is age-adjusted (all deaths before 75).",
  note:"County age-adjusted death rates for diabetes, chronic lower-respiratory disease and kidney disease require a CDC WONDER interactive extract; they are covered narratively rather than shown as invented county values. Suicide, overdose, motor-vehicle, firearm, homicide and all-injury death rates are shown by county in the Injury section below.",
  accessed:"September 2026"
 },
 causes:{
  heart:{label:"Heart disease mortality",unit:"deaths per 100,000 adults 35+",
   basis:"Age-standardized (2000 U.S. std), spatially-smoothed model; CDC Interactive Atlas of Heart Disease & Stroke (NVSS)",
   vintage:"2022–2024 (3-yr average)",source:"CDC DHDSP / data.cdc.gov mri7-5jtw",ci:false,
   us:315.3,tx:325.0,v:{"48061":289.2,"48215":301.0,"48427":339.0,"48489":294.9},map:true},
  stroke:{label:"Stroke mortality",unit:"deaths per 100,000 adults 35+",
   basis:"Age-standardized (2000 U.S. std), spatially-smoothed model; CDC Interactive Atlas of Heart Disease & Stroke (NVSS)",
   vintage:"2022–2024 (3-yr average)",source:"CDC DHDSP / data.cdc.gov y5ii-knwc",ci:false,
   us:75.9,tx:79.0,v:{"48061":76.3,"48215":61.3,"48427":72.1,"48489":75.7},map:true},
  premature:{label:"Premature death (all causes, before 75)",unit:"age-adjusted deaths per 100,000",
   basis:"Age-adjusted premature mortality; NCHS mortality files via County Health Rankings & Roadmaps (2026 data update)",
   vintage:"2021–2023",source:"NCHS/NVSS via County Health Rankings (v127)",ci:false,
   us:391.8,tx:399.3,v:{"48061":424.7,"48215":371.4,"48427":454.6,"48489":557.1},map:true}
 }
};

/* ---- LIFE EXPECTANCY (tract) benchmarks. Tract values are bundled in
 * rgv_usaleep.js (USALEEP); these are the reference lines. ---- */
const VITAL={
 lifeexp:{label:"Life expectancy at birth",unit:"years",
  basis:"NCHS USALEEP small-area life expectancy (period life table), by census tract",
  vintage:"2010–2015",source:"NCHS USALEEP / data.cdc.gov 5h56-n989",
  us:78.7,tx:78.8},
 /* county life expectancy — current (tract values above are the only small-area series NCHS has published) */
 lifeexpCounty:{label:"Life expectancy at birth (county)",unit:"years",
  basis:"Period life expectancy from NCHS mortality files; County Health Rankings & Roadmaps (v147, 2026 data update)",
  vintage:"2021–2023",source:"NCHS/NVSS via County Health Rankings (v147)",
  us:77.6,tx:77.2,v:{"48061":77.6,"48215":79.0,"48427":75.5,"48489":74.1},
  ci:{"48061":[77.3,77.9],"48215":[78.8,79.3],"48427":[74.8,76.2],"48489":[72.8,75.3]},invert:true,map:true}
};

/* ---- MATERNAL & INFANT HEALTH: county figures + US/TX benchmarks ----
 * All from NCHS vital-statistics files via County Health Rankings & Roadmaps (2026 data update),
 * pooled multi-year to stabilize small-county rates. `v` value of
 * "suppressed" = withheld for small counts. This CHR release publishes
 * no county CI; reliability is carried by the pooling window + flags. */
const MATINF={
 meta:{source:"NCHS Natality & Linked Birth/Infant Death files via County Health Rankings & Roadmaps (2026 data update)",accessed:"September 2026",
  narrative:"Preterm birth, early/adequate prenatal care and gestational diabetes are NOT cleanly county-available in the fetchable sources used here (County Health Rankings core set; State/CDC natality county tables). They are discussed narratively rather than shown as invented county values. Gestational-diabetes county rates in particular are not published at county level and are covered in the diabetes deep-dive."},
 metrics:{
  infant:{label:"Infant mortality",unit:"deaths per 1,000 live births",vintage:"2017–2023 (7-yr pooled)",
   us:5.6,tx:5.6,v:{"48061":5.5,"48215":4.7,"48427":5.3,"48489":"suppressed"},map:true,
   note:"Willacy suppressed (small counts). RGV rates sit at or below the U.S. and Texas (5.6) — consistent with the documented Hispanic infant-mortality advantage — even against very high uninsurance."},
  lbw:{label:"Low birthweight",unit:"% of live births under 2,500 g",vintage:"2018–2024",
   us:8.4,tx:8.5,v:{"48061":8.6,"48215":9.3,"48427":10.4,"48489":8.2},map:true,
   note:"At or above the U.S. (8.4%) in three counties and highest in Starr (10.4%); Willacy (8.2%) sits just below."},
  teen:{label:"Teen birth rate",unit:"births per 1,000 females 15–19",vintage:"2018–2024",
   us:14.6,tx:21.4,v:{"48061":32.7,"48215":31.8,"48427":41.1,"48489":35.5},map:true,
   note:"The standout maternal-health signal: roughly 2–3× the U.S. rate (14.6) in every county, peaking in Starr (41.1). Rates have fallen since the prior release, but the gap persists."}
 }
};

/* ---- CANCER (registry layer) — COUNTY, 2019–2023 ----
 * NCI & CDC State Cancer Profiles county incidence (Texas Cancer Registry; U.S. = SEER+NPCR),
 * age-adjusted to the 2000 U.S. standard, all stages, 5-year average. v = [rate, ciLo, ciHi];
 * "suppressed" = State Cancer Profiles withholds the rate (3 or fewer cases a year). */
const CANCER={
 meta:{basis:"Age-adjusted incidence per 100,000 (2000 U.S. std), all stages, 5-year average, by county. 95% confidence intervals shown.",
  source:"NCI & CDC State Cancer Profiles (Texas Cancer Registry; U.S. = SEER+NPCR)",
  vintage:"2019–2023",accessed:"September 2026",
  county_note:"Starr and Willacy have few cases each year, so their confidence intervals are wide; State Cancer Profiles suppresses Willacy's cervical-cancer rate (3 or fewer cases a year). Suppressed cells are labelled, never estimated.",
  history:"Earlier regional registry data (South Texas Health Status Review; Texas Cancer Registry, 2005–2009) showed the same shape — cervical and liver cancer well above Texas and the U.S., breast and lung below — so these are long-standing patterns, not new ones."},
 sites:[
  {id:"cervix",site:"Cervix uteri",v:{"48061":[11.7,9.6,14.1],"48215":[11.4,9.9,13.0],"48427":[10.9,6.3,17.4],"48489":"suppressed"},tx:9.5,us:7.5,flag:"excess",
   note:"The Valley's signature cancer disparity. Cameron (11.7) and Hidalgo (11.4) run about 50% above the U.S. (7.5) and above Texas (9.5); Starr is similar but its interval is wide. Pap/HPV screening and HPV vaccination are the levers."},
  {id:"liver",site:"Liver & bile duct",v:{"48061":[14.5,13.0,16.2],"48215":[15.2,14.0,16.4],"48427":[17.2,12.8,22.7],"48489":[18.8,11.4,29.2]},tx:12.6,us:8.7,flag:"excess",
   note:"About 1.7–2.2× the U.S. rate in every county, and above Texas. Tied to hepatitis C and the region's diabetes and fatty-liver burden. Hidalgo's rate is still rising (about +3.5% a year)."},
  {id:"colorectal",site:"Colon & rectum",v:{"48061":[43.5,40.8,46.4],"48215":[38.8,36.9,40.8],"48427":[38.2,31.4,45.9],"48489":[50.9,37.8,67.1]},tx:38.6,us:36.9,flag:"near",
   note:"At or above the U.S. (36.9): Cameron (43.5) is clearly higher, and Hidalgo's rate is rising (about +4.7% a year). Screening is low — about 48% of eligible Cameron adults are up to date, versus 66% nationally (CDC PLACES)."},
  {id:"breast",site:"Female breast",v:{"48061":[99.9,94.1,106.1],"48215":[105.3,100.9,109.8],"48427":[119.3,102.5,138.1],"48489":[101.8,74.6,135.5]},tx:125.8,us:133.0,flag:"below",
   note:"Below Texas and the U.S. — partly a young-population and screening effect rather than truly low risk; late-stage diagnosis is the local concern. Incidence is rising in all four counties."},
  {id:"lung",site:"Lung & bronchus",v:{"48061":[27.3,25.2,29.6],"48215":[25.6,24.1,27.3],"48427":[27.0,21.3,33.7],"48489":[24.3,16.0,35.7]},tx:44.3,us:51.8,flag:"below",
   note:"About half the U.S. rate, consistent with the region's historically low smoking. Rates are falling in Cameron, Hidalgo and Willacy and stable in Starr."}
 ],
 allsites:{label:"All cancer sites",v:{"48061":392.4,"48215":380.7,"48427":398.2,"48489":376.2},tx:434.2,us:453.4}
};

/* =====================================================================
 * TIER 3 — Broaden the aperture (added 2026-07). Four new domains:
 * infectious disease, environmental & occupational, behavioral/injury/
 * substance-use + provider supply, and health-system capacity.
 *
 * NON-NEGOTIABLE: no fabricated county numbers. Current-vintage, county-
 * level Tier-3 rates for these four counties are largely SUPPRESSED (small
 * counts in Starr ~45k adults / Willacy ~15k) or published only at the
 * STATE / REGIONAL level, or require CDC-WONDER / AtlasPlus / HRSA / EPA
 * interactive extracts that could not be run in this build. So — exactly as
 * the CANCER registry layer already does — most Tier-3 measures are shown at
 * the REGIONAL (Lower Rio Grande Valley / South Texas) level with real,
 * cited figures, and the rest are covered narratively and LABELLED, never
 * invented or downscaled to a county. `geo` records the geography of every
 * value; `region` = the four-county Lower Rio Grande Valley (LRGV) unless
 * noted. None of these are county choropleths (they are not county-available),
 * so they add no map layer except the FACILITIES marker layer below.
 * ===================================================================== */

/* ---- INFECTIOUS DISEASE (county, current) ----
 * TB: Texas DSHS county case counts & rates (2024; 2023 kept in `prev`); U.S. = CDC 2024.
 * HIV prevalence & chlamydia: CDC NCHHSTP AtlasPlus (2022) via County Health Rankings 2025.
 * Hepatitis C, vector-borne disease and the COVID-19 retrospective remain narrative. */
const INFECT={
 meta:{basis:"County rates per 100,000 population. TB = new cases in the year; HIV = people living with diagnosed HIV (prevalence); chlamydia = reported new cases.",
  source:"Texas DSHS TB Program (2023–2024) and CDC TB surveillance (2024); CDC NCHHSTP AtlasPlus via County Health Rankings & Roadmaps (HIV, chlamydia, 2022)",
  vintage:"2022–2024",accessed:"September 2026",
  county_note:"Small counties swing widely. Willacy (about 20,000 residents) went from 4 TB cases in 2023 to 19 in 2024, so a single cluster can multiply its rate, and small-county rates are sensitive to where people are counted (including institutional populations). Read Starr and Willacy with caution. County syphilis and gonorrhea rates are published in CDC AtlasPlus and Texas DSHS reports and were not added cell-by-cell here.",
  history:"Earlier regional data (Texas DSHS, 2006–2010, via the South Texas Health Status Review) showed the same shape: TB about three times the U.S. rate, while HIV, syphilis, chlamydia and gonorrhea ran at or below Texas. Syphilis — including congenital syphilis — has risen sharply across Texas since then.",
  hepc:"Hepatitis C is not county-rate-available in the fetchable sources used here; it is covered narratively. It matters directly to the atlas's flagged LIVER-CANCER excess: chronic HCV (with the region's diabetes/fatty-liver burden) is a leading driver of the Valley's elevated liver & bile-duct cancer incidence. Texas viral-hepatitis surveillance (Texas DSHS) is the county source to wire when an extract can be run.",
  vector:"Vector-borne disease is present but small-count, so it is described, not rated. The Lower RGV is one of the few U.S. areas with established Aedes aegypti and LOCALLY-ACQUIRED dengue transmission (a documented Cameron County outbreak in 2013), plus local Zika transmission in Cameron County during the 2016–17 epidemic and sporadic West Nile virus. Counts are small and unstable year to year; treat as a persistent risk, not a stable rate. Source: Texas DSHS arbovirus surveillance; CDC.",
  covid:"COVID-19 retrospective (a defining recent event the original atlas omitted). The Valley suffered among the most severe U.S. mortality surges of 2020–21, especially the summer-2020 wave. County health departments reported cumulative COVID-19 deaths of roughly 4,000+ in Hidalgo County (by Sept 2022; ≈450 per 100,000) and ~2,000 in Cameron County (≈1,962 by Oct 2021; ≈465 per 100,000) — county-reported cumulative counts, NOT age-adjusted rates, and not directly comparable to the age-standardized mortality layer. Sources: Hidalgo County / Cameron County COVID-19 reporting (ValleyCentral; county dashboards). Age-adjusted county excess-mortality for 2020–22 requires a CDC/NCHS or peer-reviewed extract not run in this build."},
 rows:[
  {id:"tb",measure:"Tuberculosis",unit:"new cases per 100,000",vintage:"2024",
   v:{"48061":10.0,"48215":7.2,"48427":3.0,"48489":94.9},prev:{"48061":16.6,"48215":6.1,"48427":7.6,"48489":20.0},cases:{"48061":42,"48215":66,"48427":2,"48489":19},
   tx:4.1,us:3.1,flag:"excess",
   note:"The Valley's signature communicable-disease excess. The four counties reported 129 TB cases in 2024 — about 9 per 100,000, more than twice Texas (4.1) and nearly three times the U.S. (3.1). Cameron fell from 16.6 (2023) to 10.0; Willacy's 94.9 reflects 19 cases in a county of about 20,000 and should be read as a cluster, not a stable rate. Drivers include the border, poverty, crowded housing and diabetes (a TB risk factor)."},
  {id:"hiv",measure:"HIV prevalence",unit:"people living with diagnosed HIV per 100,000",vintage:"2022",
   v:{"48061":308.7,"48215":253.4,"48427":91.2,"48489":774.2},tx:425.2,us:386.6,flag:"below",
   note:"Below Texas and the U.S. in Cameron, Hidalgo and Starr. Willacy's figure (about 130 people) is an outlier for a county of about 20,000; small-county prevalence is sensitive to where people are counted. Late diagnosis and access gaps keep local HIV care a live concern."},
  {id:"chlamydia",measure:"Chlamydia",unit:"reported cases per 100,000",vintage:"2022",
   v:{"48061":540.7,"48215":439.9,"48427":304.3,"48489":566.0},tx:517.8,us:495.0,flag:"near",
   note:"The most common reportable infection here, as nationally. Cameron and Willacy sit slightly above Texas and the U.S.; Hidalgo and Starr below. Reported chlamydia tracks testing access as much as true burden, so low figures in rural Starr may partly reflect under-testing."}
 ]
};

/* ---- ENVIRONMENTAL & OCCUPATIONAL HEALTH (regional, cited + narrative) ----
 * Two measures are regional rates (DSHS via the South Texas Health Status
 * Review, 2006–2010); heat, air and water are covered narratively because no
 * clean county rate is available in the fetchable sources used here. */
const ENVIRO={
 meta:{basis:"Regional environmental-health indicators. Region = Lower Rio Grande Valley; stx = South Texas.",
  source:"Texas DSHS (Childhood Lead Poisoning Prevention Program; Pesticide Exposure Surveillance in Texas), 2006–2010, via the South Texas Health Status Review (2013)",
  vintage:"2006–2010",accessed:"July 2026",
  heat:"Extreme heat is the Valley's clearest and worsening climate-health exposure — long, very hot, humid summers with rising heat-index days. It compounds the physical-inactivity story (it is unsafe to be active outdoors much of the year) and falls hardest on outdoor and agricultural workers. County-level heat-related-illness ED-visit rates are published through the CDC Heat & Health Tracker and CDC Environmental Public Health Tracking (Texas EPHT); they are state/regional-facing and were not extracted cell-by-cell here. Covered narratively and labelled.",
  air:"Air quality: the Lower RGV generally meets federal PM2.5 and ozone standards (it is largely rural with limited heavy industry), but carries cross-border, agricultural-dust and traffic sources, and monitoring is sparse. County annual PM2.5 / ozone design values are published by EPA AQS / AirNow and CDC EPHT at monitor/county level; not extracted cell-by-cell here. Covered narratively.",
  water:"Water is the Valley's defining environmental-justice exposure, concentrated in colonias: statewide only about half of colonia residents have sewer service, and many rely on non-tap water (see Determinants). South Texas groundwater (Gulf Coast aquifer) carries naturally elevated ARSENIC in places, a documented drinking-water concern (USGS/TCEQ). Public-water-system violations are tracked in EPA SDWIS / TCEQ; colonia water & sewer access in TWDB / TDHCA. These are place/system-level, not clean county rates, and are covered narratively.",
  occ:"Farmworker/occupational hazards beyond pesticides — heat, machinery injury, and musculoskeletal strain — are largely captured only at the STATE level (BLS Census of Fatal Occupational Injuries; NIOSH). No four-county rate exists in the fetchable sources; covered narratively and labelled state-level. Note the surveillance figures below almost certainly UNDERCOUNT farmworker exposure (many cases go unreported)."},
 rows:[
  {measure:"Childhood lead (blood lead ≥10 µg/dL)",unit:"% of children 0–14 tested",region:0.9,stx:0.9,tx:0.8,us:null,vintage:"2006–2010",flag:"near",
   note:"Among children tested, the Lower RGV share with elevated blood lead (~0.9%) matched South Texas and was near the rest of Texas — but Hispanic children (1.2%) ran higher than non-Hispanic white children (0.4%), and older housing, folk remedies and imported goods remain local exposure sources. (CDC has since lowered the reference value to 3.5 µg/dL, so current counts would be higher.)"},
  {measure:"Work-related pesticide exposure",unit:"cases per 100,000 workers",region:0.8,stx:0.8,tx:1.0,us:null,vintage:"2006–2010",flag:"near",
   note:"Reported occupational pesticide-illness incidence in the Lower RGV (~0.8/100,000) tracked South Texas — but this is surveillance-reported and badly undercounts farmworker exposure. Nationally, pesticide-related illness among agricultural workers runs ~48/100,000, and ~88% of U.S. farmworkers are Hispanic; pesticide DRIFT also raises risk for everyone living in agricultural areas. Read the low reported rate as under-ascertainment, not low true exposure."}
 ]
};

/* ---- BEHAVIORAL HEALTH, INJURY & SUBSTANCE USE + PROVIDER SUPPLY ----
 * County death rates from NCHS death certificates via County Health Rankings & Roadmaps
 * (2025 release + 2026 data updates). Suicide is age-adjusted; the rest are crude rates pooled
 * over multi-year windows. "suppressed" = too few deaths to publish. Substance-use prevalence
 * is SAMHSA substate only (narrative). */
const BINJ={
 meta:{basis:"County death rates per 100,000 population (NCHS death certificates). Suicide is age-adjusted; the others are crude rates pooled over several years to stabilize small counties.",
  source:"NCHS mortality files via County Health Rankings & Roadmaps (2025 release and 2026 data updates)",
  vintage:"2017–2023 (window varies by measure)",accessed:"September 2026",
  gaps:"Falls and alcohol-related deaths are not in this county set (they need a CDC WONDER extract), so they are not shown. Because the Valley is young, crude injury rates run lower partly because of age structure — compare with care. Overdose deaths cover 2020–2022, the latest county release; fentanyl is rising along the border, so the region's low overdose toll is a risk to watch, not a settled advantage.",
  substance:"Substance-use PREVALENCE (alcohol, illicit drug and opioid use disorder) is published by SAMHSA NSDUH only at the SUBSTATE region level (Texas Health & Human Services substate regions), not by county — presented regionally and labelled; county values are not faked.",
  provider:"Provider SUPPLY is the quantifiable side of the behavioral-health gap. All four counties are federally designated HEALTH PROFESSIONAL SHORTAGE AREAS for primary care, dental and mental health. The ratios are stark: roughly 1,030 (Cameron), 1,100 (Hidalgo), 3,140 (Starr) and 2,230 (Willacy) residents per mental-health provider, versus about 590 in Texas and 300 nationally (CMS NPI registry via County Health Rankings). See the provider table in Determinants."},
 rows:[
  {id:"suicide",measure:"Suicide",unit:"age-adjusted deaths per 100,000",vintage:"2019–2023",
   v:{"48061":8.1,"48215":7.1,"48427":8.1,"48489":10.8},tx:13.9,us:14.0,flag:"below",
   note:"Roughly half to three-fifths of the U.S. rate in Cameron, Hidalgo and Starr — consistent with the broader Hispanic-mortality advantage and strong family ties. This is NOT evidence of low distress: frequent mental distress and depression sit near or above national levels while behavioral-health supply is among the thinnest in Texas."},
  {id:"overdose",measure:"Drug overdose deaths",unit:"deaths per 100,000",vintage:"2020–2022",
   v:{"48061":6.1,"48215":5.4,"48427":5.1,"48489":"suppressed"},tx:16.5,us:30.8,flag:"below",
   note:"About one-fifth of the U.S. rate and a third of Texas — among the lowest in the state. Willacy is suppressed (too few deaths to publish)."},
  {id:"mvc",measure:"Motor-vehicle crash deaths",unit:"deaths per 100,000",vintage:"2017–2023",
   v:{"48061":10.2,"48215":9.1,"48427":14.5,"48489":19.2},tx:13.8,us:12.5,flag:"mixed",
   note:"Split by geography: metro Cameron and Hidalgo sit below Texas and the U.S., while rural Starr (14.5) and Willacy (19.2) run above both — long rural distances, highway speeds and time to trauma care."},
  {id:"firearm",measure:"Firearm deaths",unit:"deaths per 100,000",vintage:"2019–2023",
   v:{"48061":7.1,"48215":6.7,"48427":7.3,"48489":11.6},tx:14.6,us:13.8,flag:"below",
   note:"About half the Texas and U.S. rates in Cameron, Hidalgo and Starr; Willacy (11.6) is closer to national but rests on 12 deaths over five years."},
  {id:"homicide",measure:"Homicide",unit:"deaths per 100,000",vintage:"2017–2023",
   v:{"48061":3.2,"48215":3.7,"48427":3.5,"48489":"suppressed"},tx:6.7,us:6.7,flag:"below",
   note:"About half the Texas and U.S. rates — contrary to border-violence stereotypes. Willacy is suppressed (too few deaths to publish)."},
  {id:"injury",measure:"All injury deaths",unit:"deaths per 100,000",vintage:"2019–2023",
   v:{"48061":39.5,"48215":35.1,"48427":40.1,"48489":53.4},tx:69.3,us:86.8,flag:"below",
   note:"All injury deaths combined (unintentional and intentional) run well below Texas and the U.S. in every county — largely because overdose, the biggest driver of the national injury toll, is low here."}
 ]
};

/* ---- HEALTH-SYSTEM CAPACITY & ACCESS GEOGRAPHY ----
 * The CAPACITY/DATA layer (the user-facing 'find care near me' action layer is
 * Tier 4, intentionally not built here). Designations are public record;
 * FACILITIES is a real, named point layer rendered as an optional map marker
 * layer. Facility coordinates are APPROXIMATE (geocoded to the known campus/
 * city) and labelled as such — they locate real, named, publicly-listed
 * facilities, not precise survey points. */
const CAPACITY={
 meta:{accessed:"September 2026",
  source:"HRSA Data Warehouse (data.hrsa.gov) shortage-area designations & Health Center Program; HRSA Area Health Resources File & CMS NPI registry via County Health Rankings & Roadmaps (provider ratios); CMS hospital/dialysis directories",
  designations:"All four counties carry federal shortage designations — HEALTH PROFESSIONAL SHORTAGE AREAS (HPSA) for primary care, dental and mental health, and MEDICALLY UNDERSERVED AREA/POPULATION (MUA/P) status — the formal, quantified version of the 'few providers' story. Rural Starr and Willacy are the most acute: Willacy has NO hospital of its own (residents rely on Cameron County hospitals in Harlingen/Brownsville), and Starr has a single small county hospital. Designation status is updated continuously at data.hrsa.gov/tools/shortage-area; pin a query date for reproducibility.",
  ratios:"Residents per provider (higher = fewer providers). Every county has fewer primary-care physicians, dentists and mental-health providers per person than Texas, and far fewer than the U.S. — worst in rural Starr and Willacy, where Willacy has a single dentist for about 20,000 people. The shortage designations above are the formal version of these numbers.",
  note:"This is the capacity/data layer; the user-facing care-finder lives in the System response section."},
 /* residents per provider (1 / providers-per-resident), County Health Rankings & Roadmaps measure files */
 providers:[
  {id:"pcp",label:"Primary-care physicians",vintage:"AHRF 2024–25 release",v:{"48061":1942,"48215":2056,"48427":3866,"48489":3357},tx:1636,us:1312},
  {id:"dent",label:"Dentists",vintage:"AHRF 2024–25 release",v:{"48061":3115,"48215":3186,"48427":6593,"48489":20037},tx:1576,us:1341},
  {id:"mhp",label:"Mental-health providers",vintage:"CMS NPI registry, 2024",v:{"48061":1028,"48215":1097,"48427":3140,"48489":2226},tx:590,us:301}
 ]
};

/* ---- FACILITIES — real, named, mappable point layer (Tier 3) ----
 * A NEW optional Leaflet MARKER layer (points, not a choropleth). type:
 * 'hospital' | 'fqhc' | 'gap'. Coordinates are APPROXIMATE campus/city
 * locations for real, publicly-listed facilities (HRSA Health Center Program;
 * CMS; provider sites) — labelled approximate, never presented as exact.
 * Dialysis centers are numerous (DaVita/Fresenius across the McAllen,
 * Harlingen and Brownsville metros and Rio Grande City) and are described
 * narratively rather than mapped as unverified points. */
const FACILITIES={
 meta:{source:"HRSA Health Center Program & Data Warehouse (data.hrsa.gov); CMS hospital directory; provider websites (DHR Health, Valley Baptist, South Texas Health System, Su Clinica, Nuestra Clinica del Valle)",
  accessed:"July 2026",
  note:"Approximate campus/city locations of real, named, publicly-listed facilities — an illustrative capacity layer, not a complete or survey-grade directory. Willacy County has no hospital; its residents rely on hospitals in Cameron County. Dialysis centers (numerous, chain-operated) are covered narratively, not mapped, to avoid unverified points."},
 sites:[
  {name:"DHR Health",type:"hospital",city:"Edinburg",fips:"48215",lat:26.288,lng:-98.163,note:"Largest hospital in the RGV; physician-owned, full-service."},
  {name:"South Texas Health System — McAllen Medical Center",type:"hospital",city:"McAllen",fips:"48215",lat:26.199,lng:-98.236,note:"Acute-care hospital."},
  {name:"Rio Grande Regional Hospital",type:"hospital",city:"McAllen",fips:"48215",lat:26.223,lng:-98.245,note:"Acute-care hospital."},
  {name:"South Texas Health System — Edinburg",type:"hospital",city:"Edinburg",fips:"48215",lat:26.301,lng:-98.157,note:"Acute-care hospital."},
  {name:"Valley Baptist Medical Center — Harlingen",type:"hospital",city:"Harlingen",fips:"48061",lat:26.185,lng:-97.690,note:"Major Cameron County hospital; serves Willacy residents."},
  {name:"Valley Baptist Medical Center — Brownsville",type:"hospital",city:"Brownsville",fips:"48061",lat:25.933,lng:-97.512,note:"Acute-care hospital."},
  {name:"Valley Regional Medical Center",type:"hospital",city:"Brownsville",fips:"48061",lat:25.930,lng:-97.497,note:"Acute-care hospital."},
  {name:"Harlingen Medical Center",type:"hospital",city:"Harlingen",fips:"48061",lat:26.163,lng:-97.664,note:"Acute-care hospital."},
  {name:"Starr County Memorial Hospital",type:"hospital",city:"Rio Grande City",fips:"48427",lat:26.379,lng:-98.817,note:"Starr County's only hospital — small, rural."},
  {name:"No hospital in Willacy County",type:"gap",city:"Raymondville",fips:"48489",lat:26.483,lng:-97.782,note:"Willacy County has no hospital; nearest hospitals are ~30 miles away in Harlingen (Cameron County). An FQHC clinic (Su Clinica) operates in Raymondville."},
  {name:"Nuestra Clinica del Valle (FQHC) — main",type:"fqhc",city:"San Juan",fips:"48215",lat:26.189,lng:-98.155,note:"Federally Qualified Health Center; ~11 sites across Hidalgo & Starr, sliding-scale regardless of insurance."},
  {name:"Nuestra Clinica del Valle (FQHC) — Rio Grande City",type:"fqhc",city:"Rio Grande City",fips:"48427",lat:26.379,lng:-98.820,note:"FQHC site serving rural Starr County."},
  {name:"Su Clinica (FQHC) — Harlingen",type:"fqhc",city:"Harlingen",fips:"48061",lat:26.190,lng:-97.696,note:"FQHC serving Cameron & Willacy counties."},
  {name:"Su Clinica (FQHC) — Brownsville",type:"fqhc",city:"Brownsville",fips:"48061",lat:25.906,lng:-97.497,note:"FQHC site."},
  {name:"Su Clinica (FQHC) — Raymondville",type:"fqhc",city:"Raymondville",fips:"48489",lat:26.483,lng:-97.783,note:"The FQHC safety net in hospital-less Willacy County."},
  {name:"Brownsville Community Health Center (FQHC)",type:"fqhc",city:"Brownsville",fips:"48061",lat:25.914,lng:-97.499,note:"FQHC serving Cameron County."}
 ]
};

/* =====================================================================
 * TIER 4 — CARE FINDER (user-facing "what can I do / where do I get care").
 * Added 2026-07. Turns the "for your family" guidance into action. Combines
 * the real FACILITIES point layer (above) with VERIFIED statewide resources.
 *
 * VERIFICATION (build time, July 2026): every phone/URL below was checked
 * against the official source. Facility-level phones are given only for the
 * safety-net FQHC systems whose org numbers were verified; for exact address,
 * hours and phone of any single site, the finder points to the authoritative,
 * always-current HRSA "Find a Health Center" locator and 2-1-1 rather than
 * shipping site-level numbers that drift. RESPONSIBLE FRAMING: crisis/health
 * resources are described accurately and neutrally — no assurances about
 * confidentiality or what happens on a call, and no promised outcomes.
 * ===================================================================== */
const CARE={
 meta:{
  verified:"July 2026",
  intro:"Knowing where to go is half the battle. Pick what you need and roughly where you are to see nearby community health centers and hospitals, plus statewide help lines. Community health centers (FQHCs) see everyone — including people with no insurance — and charge on a sliding scale based on what you can afford.",
  fqhcNote:"Federally Qualified Health Centers (FQHCs) serve everyone regardless of insurance or ability to pay, on a sliding fee scale set by income.",
  willacyNote:"Willacy County has no hospital of its own; residents rely on hospitals in Cameron County (Harlingen/Brownsville, ~30 miles). An FQHC (Su Clinica) operates in Raymondville.",
  exactNote:"For a specific site's exact address, hours and phone — which can change — use the HRSA “Find a Health Center” locator or dial 2-1-1.",
  disclaimer:"This is a starting point, not a complete directory, and not medical advice. In a medical emergency call 911."
 },
 /* NEEDS: user filter -> which facility types + guidance + which resources to surface */
 needs:[
  {id:"primary",label:"Primary & chronic care",types:["fqhc"],
   blurb:"Checkups, diabetes and blood-pressure control, prescriptions, and referrals. Community health centers (FQHCs) are the safety net here and see uninsured patients on a sliding scale.",res:["hrsa","t211"]},
  {id:"dental",label:"Dental care",types:["fqhc"],
   blurb:"Several Valley FQHCs include dental clinics (for example, Su Clinica in Harlingen). Use the HRSA locator to filter for a health center with dental services near you.",res:["hrsa","t211"]},
  {id:"mental",label:"Mental health & crisis",types:["fqhc"],
   blurb:"If you or someone you know is in emotional distress or crisis, you can call or text 988 any time. For ongoing care, many FQHCs offer behavioral-health services; the Valley has few providers, so ask about telehealth and wait times.",res:["c988","hrsa","t211"]},
  {id:"screening",label:"Cancer screening",types:["fqhc"],
   blurb:"The Valley has historically led the nation in cervical cancer, so Pap/HPV and breast screening matter. Eligible Texas women can get free or low-cost breast and cervical cancer screening through the BCCS program; FQHCs also provide screening.",res:["bccs","hrsa","t211"]},
  {id:"quit",label:"Quit smoking / vaping",types:["fqhc"],
   blurb:"Free coaching and, for those who qualify, nicotine-replacement therapy are available statewide through the Texas Tobacco Quitline. Your health center can also help.",res:["quit","hrsa"]}
 ],
 /* RESOURCES: verified statewide help lines. framed factually + neutrally. */
 resources:{
  c988:{name:"988 Suicide & Crisis Lifeline",phone:"988",phoneHref:"988",
   note:"Call or text 988 to reach a trained crisis counselor by phone or text, any time of day. For service in Spanish, call 988 and press 2, or chat online.",
   url:"https://988lifeline.org/",kind:"crisis"},
  quit:{name:"Texas Tobacco Quitline",phone:"1-800-QUIT-NOW (1-800-784-8669) · 877-YES-QUIT (877-937-7848)",phoneHref:"18007848669",
   note:"Free coaching to stop smoking or vaping, plus nicotine-replacement therapy for those who qualify. Open to Texas residents 13 and older; help available in Spanish.",
   url:"https://www.yesquit.org/",kind:"line"},
  bccs:{name:"Breast & Cervical Cancer Services (BCCS)",phone:"2-1-1 · program line 512-776-7796",phoneHref:"5127767796",
   note:"Free or low-cost mammograms and Pap tests for eligible Texas women. Find a provider through Healthy Texas Women, or call 2-1-1.",
   url:"https://www.healthytexaswomen.org/healthcare-programs/breast-cervical-cancer-services",kind:"line"},
  t211:{name:"2-1-1 Texas",phone:"2-1-1 (or 877-541-7905)",phoneHref:"8775417905",
   note:"A free statewide line that connects you to health and social services — including help finding low-cost care, food, and prescription assistance.",
   url:"https://www.211texas.org/",kind:"line"},
  hrsa:{name:"HRSA — Find a Health Center",phone:"",phoneHref:"",
   note:"Search any address for a nearby community health center (FQHC), with its exact phone, hours and services. FQHCs serve everyone, including the uninsured, on a sliding scale based on income.",
   url:"https://findahealthcenter.hrsa.gov/",kind:"locator"}
 },
 /* ORGS: verified FQHC safety-net systems (org-level phone; sites vary). */
 orgs:{
  ncdv:{name:"Nuestra Clinica del Valle",phone:"(956) 787-2131",url:"https://nuestraclinicadelvalle.org/",
   note:"FQHC network (~11 sites across Hidalgo & Starr). Sliding scale; sees uninsured patients."},
  suclinica:{name:"Su Clinica",phone:"(956) 365-6000",url:"https://www.suclinica.org/",
   note:"FQHC serving Cameron & Willacy (Harlingen, Brownsville, Raymondville). Includes dental and women's health."},
  bchc:{name:"Brownsville Community Health Center",phone:"",url:"https://findahealthcenter.hrsa.gov/",
   note:"FQHC serving Cameron County. Use the HRSA locator for the current site phone and hours."}
 },
 /* map a FACILITIES site name -> org key (for verified phone in results) */
 siteOrg:{
  "Nuestra Clinica del Valle (FQHC) — main":"ncdv",
  "Nuestra Clinica del Valle (FQHC) — Rio Grande City":"ncdv",
  "Su Clinica (FQHC) — Harlingen":"suclinica",
  "Su Clinica (FQHC) — Brownsville":"suclinica",
  "Su Clinica (FQHC) — Raymondville":"suclinica",
  "Brownsville Community Health Center (FQHC)":"bchc"
 },
 /* AREA centroids for the location dropdown (accessible, offline, always works) */
 areas:[
  {name:"Brownsville (Cameron)",lat:25.930,lng:-97.499},
  {name:"Harlingen (Cameron)",lat:26.190,lng:-97.696},
  {name:"San Benito (Cameron)",lat:26.133,lng:-97.631},
  {name:"Port Isabel / Laguna Vista (Cameron)",lat:26.073,lng:-97.213},
  {name:"McAllen (Hidalgo)",lat:26.203,lng:-98.230},
  {name:"Edinburg (Hidalgo)",lat:26.301,lng:-98.163},
  {name:"Mission (Hidalgo)",lat:26.216,lng:-98.325},
  {name:"Pharr / San Juan / Alamo (Hidalgo)",lat:26.190,lng:-98.155},
  {name:"Weslaco / Mercedes / Donna (Hidalgo)",lat:26.156,lng:-97.990},
  {name:"Rio Grande City (Starr)",lat:26.379,lng:-98.820},
  {name:"Roma (Starr)",lat:26.404,lng:-99.014},
  {name:"Raymondville (Willacy)",lat:26.483,lng:-97.782}
 ],
 /* compact RGV ZIP -> [lat,lng] centroid table (convenience input) */
 zips:{
  "78520":[25.930,-97.499],"78521":[25.978,-97.462],"78526":[25.951,-97.441],"78550":[26.190,-97.696],
  "78552":[26.202,-97.635],"78586":[26.133,-97.631],"78566":[26.071,-97.476],"78578":[26.073,-97.213],
  "78559":[26.152,-97.823],"78583":[26.235,-97.581],"78501":[26.203,-98.230],"78503":[26.190,-98.253],
  "78504":[26.280,-98.250],"78539":[26.301,-98.163],"78541":[26.362,-98.140],"78542":[26.281,-98.100],
  "78572":[26.213,-98.331],"78574":[26.272,-98.284],"78577":[26.192,-98.183],"78589":[26.190,-98.155],
  "78596":[26.160,-97.990],"78570":[26.149,-97.913],"78537":[26.140,-98.053],"78516":[26.182,-98.120],
  "78557":[26.100,-98.263],"78582":[26.379,-98.820],"78584":[26.404,-99.014],"78580":[26.483,-97.782],
  "78569":[26.412,-97.792]
 }
};

/* =====================================================================
 * TIER 4 — CLAIM-LEVEL CITATIONS. Added 2026-07.
 * REFS: keyed reference registry (full citation + URL + vintage). REF_ORDER
 * fixes the displayed [n] numbering. SRCMAP maps a *specific claim* (a measure
 * id, or a named section/determinant claim) to the reference(s) that actually
 * support it. INTEGRITY RULE: a key is attached only where the source really
 * supports that claim; claims with no traceable source are NOT given a
 * manufactured citation — they are listed in the Tier-4 report for review.
 * ===================================================================== */
const REFS={
 places:{cite:"CDC PLACES: Local Data for Better Health — County Data, 2025 release (model-based small-area estimates from BRFSS 2023; data.cdc.gov swc5-untb). U.S. reference = PLACES national estimate; Texas reference = adult-population-weighted average of the Texas county estimates (computed for this atlas).",url:"https://data.cdc.gov/500-Cities-Places/PLACES-Local-Data-for-Better-Health-County-Data-20/swc5-untb",vintage:"2025 release (BRFSS 2023)"},
 placesTract:{cite:"CDC PLACES: Local Data for Better Health — Census Tract Data, 2025 release (dataset cwsq-ngmh, crude prevalence).",url:"https://data.cdc.gov/resource/cwsq-ngmh.json",vintage:"2025 release (BRFSS 2023)"},
 acs:{cite:"U.S. Census Bureau — Small Area Income & Poverty Estimates 2024 (county poverty, all ages) and American Community Survey 2020–2024 5-year estimates (median household income), via QuickFacts.",url:"https://www.census.gov/quickfacts/fact/table/cameroncountytexas,hidalgocountytexas,starrcountytexas,willacycountytexas,TX,US/IPE120224",vintage:"SAIPE 2024; ACS 2020–2024"},
 svi:{cite:"CDC/ATSDR Social Vulnerability Index (SVI), overall national percentile.",url:"https://www.atsdr.cdc.gov/place-health/php/svi/",vintage:"2022 (latest release)"},
 feeding:{cite:"Feeding America — Map the Meal Gap 2025 (county food insecurity, 2023 data), as published by County Health Rankings & Roadmaps (2026 data update).",url:"https://map.feedingamerica.org/",vintage:"2023 data"},
 cureus24:{cite:"Burden of Diabetes Mellitus in the Medically Underserved Rio Grande Valley — Texas hospital-discharge analysis (amputations, cost; also the ~44% hospitalized figure). Cureus.",url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC11500487/",vintage:"2024 (data 2012–2022)"},
 hdsa:{cite:"CDC Interactive Atlas of Heart Disease & Stroke (DHDSP; NVSS; heart mri7-5jtw, stroke y5ii-knwc; age-standardized to 2000 U.S. std, adults 35+, spatially smoothed).",url:"https://www.cdc.gov/heart-disease-stroke-atlas/about/index.html",vintage:"2022–2024"},
 chr:{cite:"County Health Rankings & Roadmaps — 2025 release and 2026 data updates (NCHS mortality & natality: premature death, life expectancy, infant mortality, low birthweight, teen births, injury, suicide, overdose, firearm and homicide deaths). Measure files: github.com/countyhealthrankings/county_health_measure_calculations.",url:"https://www.countyhealthrankings.org/health-data/texas",vintage:"2026 update (data 2017–2024)"},
 usaleep:{cite:"NCHS USALEEP — U.S. Life Expectancy at Birth by Census Tract (data.cdc.gov 5h56-n989).",url:"https://data.cdc.gov/National-Center-for-Health-Statistics/U-S-Life-Expectancy-at-Birth-by-State-and-Census-T/5h56-n989",vintage:"2010–2015"},
 scp:{cite:"State Cancer Profiles (NCI & CDC) — Texas county cancer incidence, all stages, age-adjusted (Texas Cancer Registry; U.S. = SEER+NPCR).",url:"https://statecancerprofiles.cancer.gov/incidencerates/index.php?stateFIPS=48&areatype=county&cancer=057&race=00&sex=2&age=001&stage=999&year=0&type=incd&sortVariableName=rate&sortOrder=default",vintage:"2019–2023"},
 dshs_tb:{cite:"Texas DSHS — Tuberculosis Case Counts and Rates by County, 2023–2024.",url:"https://www.dshs.texas.gov/sites/default/files/diseases/tuberculosis/docs/tb-case-counts-rates-2023-2024.pdf",vintage:"2023–2024"},
 cdc_tb:{cite:"CDC — Reported Tuberculosis in the United States, 2024 (10,388 cases; 3.1 per 100,000).",url:"https://www.cdc.gov/tb-surveillance-report-2024/executive-commentary/index.html",vintage:"2024"},
 atlasplus:{cite:"CDC NCHHSTP AtlasPlus — county HIV prevalence and chlamydia rates, via County Health Rankings & Roadmaps 2025.",url:"https://www.cdc.gov/nchhstp/atlasplus/",vintage:"2022"},
 ahrf:{cite:"HRSA Area Health Resources File (2024–25 release) and CMS NPI registry, via County Health Rankings & Roadmaps — primary-care physician, dentist and mental-health provider ratios.",url:"https://data.hrsa.gov/topics/health-workforce/ahrf",vintage:"2023–2024"},
 hrsa:{cite:"HRSA Data Warehouse & Health Center Program — HPSA/MUA shortage-area designations and FQHC locations.",url:"https://data.hrsa.gov/tools/shortage-area",vintage:"current"},
 stxreview:{cite:"The South Texas Health Status Review (Springer, 2013) — Texas Cancer Registry / NCI SEER and Texas DSHS surveillance (historical context and the environmental-health indicators).",url:"https://www.ncbi.nlm.nih.gov/books/NBK543617/",vintage:"2005–2010"},
 dhr:{cite:"DHR Health — “The Rio Grande Valley Is Among the Unhealthiest Areas in America.”",url:"https://dhrresearch.org/rio-grande-valley-is-among-the-unhealthiest-areas-in-america/",vintage:"—"}
};
const REF_ORDER=["places","placesTract","acs","svi","feeding","cureus24","hdsa","chr","usaleep","scp","dshs_tb","cdc_tb","atlasplus","ahrf","hrsa","stxreview","dhr"];
/* claim id -> supporting reference key(s). Measure ids reuse DATA keys. */
const SRCMAP={
 diabetes:["places","cureus24"],obesity:["places"],bphigh:["places"],highchol:["places"],
 chd:["places","hdsa"],stroke:["places","hdsa"],copd:["places"],casthma:["places"],
 cancer:["places","scp"],arthritis:["places"],depression:["places"],mhlth:["places"],
 ghlth:["places"],disability:["places"],access2:["places","acs"],lpa:["places"],csmoking:["places"],
 ckd:["places"],
 thesis:["places","dhr"],
 sd_pov:["acs"],sd_inc:["acs"],sd_food:["feeding"],sd_svi:["svi"],sd_unins:["places","acs"],
 scatter:["placesTract"],
 mort_sec:["hdsa","chr","usaleep"],matinf_sec:["chr"],infect_sec:["dshs_tb","cdc_tb","atlasplus"],capacity_sec:["hrsa","ahrf"]
};
/* human labels for the "cited by" back-links in the registry */
const CLAIM_LABELS={
 thesis:"Overview thesis",sd_pov:"Poverty",sd_inc:"Median income",sd_food:"Food insecurity",
 sd_svi:"Social vulnerability",sd_unins:"Uninsured",scatter:"Determinant scatter",
 mort_sec:"Mortality & life expectancy",matinf_sec:"Maternal & infant",infect_sec:"Infectious disease",
 capacity_sec:"Health-system capacity"
};

const SOURCES=[
 ['CDC PLACES — Local Data for Better Health, 2025 release (county swc5-untb; tract cwsq-ngmh)','https://www.cdc.gov/places/'],
 ['Census TIGERweb tract geometry service','https://tigerweb.geo.census.gov/'],
 ['Burden of Diabetes Mellitus in the Medically Underserved RGV (Cureus, 2024)','https://pmc.ncbi.nlm.nih.gov/articles/PMC11500487/'],
 ['County Health Rankings & Roadmaps — Texas (2025 release + 2026 data updates)','https://www.countyhealthrankings.org/health-data/texas'],
 ['County Health Rankings & Roadmaps — measure calculation files (GitHub)','https://github.com/countyhealthrankings/county_health_measure_calculations'],
 ['CDC Interactive Atlas of Heart Disease & Stroke — county mortality 2022–2024 (heart mri7-5jtw, stroke y5ii-knwc)','https://www.cdc.gov/heart-disease-stroke-atlas/about/index.html'],
 ['NCHS USALEEP — U.S. Life Expectancy at Birth by Census Tract, 2010–2015 (data.cdc.gov 5h56-n989)','https://data.cdc.gov/National-Center-for-Health-Statistics/U-S-Life-Expectancy-at-Birth-by-State-and-Census-T/5h56-n989'],
 ['State Cancer Profiles — Texas county incidence, 2019–2023 (NCI & CDC / Texas Cancer Registry)','https://statecancerprofiles.cancer.gov/'],
 ['Texas DSHS — TB Case Counts and Rates by County, 2023–2024','https://www.dshs.texas.gov/tuberculosis-tb/tb-data-statistics'],
 ['CDC — Reported Tuberculosis in the United States, 2024','https://www.cdc.gov/tb-surveillance-report-2024/executive-commentary/index.html'],
 ['CDC AtlasPlus — HIV/STI/TB surveillance (county where available)','https://www.cdc.gov/nchhstp/atlasplus/'],
 ['U.S. Census Bureau QuickFacts — SAIPE 2024 poverty; ACS 2020–2024 median household income','https://www.census.gov/quickfacts/'],
 ['Feeding America — Map the Meal Gap','https://map.feedingamerica.org/'],
 ['CDC/ATSDR Social Vulnerability Index (2022)','https://www.atsdr.cdc.gov/place-health/php/svi/'],
 ['HRSA Area Health Resources File (provider supply)','https://data.hrsa.gov/topics/health-workforce/ahrf'],
 ['HRSA Data Warehouse — HPSA/MUA shortage-area designations & Health Center Program (FQHCs)','https://data.hrsa.gov/tools/shortage-area'],
 ['The South Texas Health Status Review (NCBI Bookshelf) — historical regional context','https://www.ncbi.nlm.nih.gov/books/NBK543617/'],
 ['Texas DSHS — Arbovirus / vector-borne disease surveillance (dengue, Zika, West Nile)','https://www.dshs.texas.gov/arbovirus/'],
 ['Hidalgo & Cameron County COVID-19 reporting (cumulative deaths; ValleyCentral / county dashboards)','https://www.valleycentral.com/news/local-news/4000-covid-19-deaths-hidalgo-county-reaches-grim-mark/'],
 ['CDC Heat & Health Tracker / CDC Environmental Public Health Tracking (heat-related illness, PM2.5, ozone)','https://ephtracking.cdc.gov/'],
 ['EPA Air Quality System (AQS) / AirNow — PM2.5 & ozone','https://www.epa.gov/aqs'],
 ['EPA SDWIS / TCEQ — drinking-water violations; TWDB / TDHCA — colonia water & sewer access; USGS — South Texas groundwater arsenic','https://www.epa.gov/ground-water-and-drinking-water'],
 ['SAMHSA — National Survey on Drug Use and Health (NSDUH) substate estimates','https://www.samhsa.gov/data/'],
 ['CMS — hospital & dialysis facility directories (Care Compare)','https://www.medicare.gov/care-compare/'],
 ['DHR Health — "RGV Is Among the Unhealthiest Areas in America"','https://dhrresearch.org/rio-grande-valley-is-among-the-unhealthiest-areas-in-america/']
];

/* ===== Multi-year trend: real CDC PLACES county releases (crude %). See DATA_DICTIONARY.md ===== */
const TRENDS={"releases": [2020, 2022, 2025], "brfss": ["2017–18", "2019–20", "2022–23"], "note": "Successive CDC PLACES county releases (GIS-friendly, crude prevalence). PLACES advises releases are not a methodologically clean panel; treat as indicative.", "v": {"diabetes": {"48061": [18.0, 17.7, 18.3], "48215": [17.2, 18.3, 17.4], "48427": [19.4, 19.1, 20.0], "48489": [18.3, 17.7, 18.8]}, "obesity": {"48061": [39.1, 41.8, 40.3], "48215": [44.2, 42.0, 44.2], "48427": [42.6, 43.4, 45.0], "48489": [43.8, 45.1, 43.2]}, "bphigh": {"48061": [35.3, 33.5, 34.0], "48215": [33.6, 33.5, 33.4], "48427": [36.2, 36.2, 36.6], "48489": [36.6, 36.0, 36.5]}, "highchol": {"48061": [36.3, 34.8, 36.5], "48215": [33.2, 32.0, 35.3], "48427": [37.3, 34.8, 37.2], "48489": [36.9, 34.8, 36.4]}, "chd": {"48061": [8.8, 7.6, 7.1], "48215": [7.9, 7.0, 6.5], "48427": [9.1, 7.9, 7.6], "48489": [8.9, 7.7, 7.7]}, "stroke": {"48061": [4.1, 3.7, 3.9], "48215": [3.8, 3.4, 3.6], "48427": [4.3, 3.9, 4.2], "48489": [4.1, 3.6, 4.2]}, "copd": {"48061": [7.3, 6.6, 6.2], "48215": [6.8, 6.3, 5.9], "48427": [7.9, 7.2, 7.2], "48489": [7.5, 6.8, 7.2]}, "casthma": {"48061": [8.9, 8.7, 8.7], "48215": [8.5, 8.8, 8.7], "48427": [9.4, 9.7, 9.3], "48489": [8.7, 8.9, 8.9]}, "cancer": {"48061": [5.5, 4.9, 4.9], "48215": [4.7, 4.4, 4.4], "48427": [4.9, 4.2, 4.1], "48489": [5.1, 4.5, 4.6]}, "arthritis": {"48061": [24.3, 20.2, 20.1], "48215": [19.6, 19.5, 20.2], "48427": [23.2, 22.3, 22.4], "48489": [23.2, 21.4, 22.3]}, "access2": {"48061": [45.1, 48.2, 35.9], "48215": [47.4, 49.9, 37.4], "48427": [52.5, 53.4, 43.5], "48489": [48.6, 50.4, 40.8]}, "csmoking": {"48061": [17.2, 16.3, 13.0], "48215": [15.1, 16.4, 13.3], "48427": [19.8, 20.3, 16.9], "48489": [19.5, 19.1, 16.4]}, "lpa": {"48061": [38.9, 33.2, 36.9], "48215": [34.6, 32.9, 37.5], "48427": [43.8, 42.3, 47.0], "48489": [40.2, 38.6, 44.1]}, "mhlth": {"48061": [15.3, 15.6, 16.5], "48215": [15.0, 15.9, 18.2], "48427": [17.2, 17.3, 19.5], "48489": [15.8, 16.0, 18.4]}, "ghlth": {"48061": [null, 28.6, 31.2], "48215": [null, 27.8, 33.7], "48427": [null, 33.4, 40.3], "48489": [null, 29.0, 37.1]}, "depression": {"48061": [null, 19.4, 18.9], "48215": [null, 20.1, 20.2], "48427": [null, 20.7, 21.2], "48489": [null, 19.3, 19.5]}, "disability": {"48061": [null, null, 37.0], "48215": [null, null, 39.4], "48427": [null, null, 45.5], "48489": [null, null, 43.4]}}};

/* ===== NAR — "By the numbers" narrative blurbs, keyed by measure id (+ ckd).
   Rendered inside each condition deep-dive. HTML is allowed in the strings. ===== */
const NAR={
 diabetes:`<span class="stat">~1 in 5 adults</span> diagnosed in every county, ~45–65% above the U.S. 12.0%; point estimates are highest in <strong>Starr (20.0%)</strong>, though small-county confidence intervals overlap the others. Diagnosed only — true prevalence is higher. Diabetes is the engine of downstream disease here: it drives the nation-leading diabetes-amputation rates (Willacy ~12.9%, Starr ~11% of diabetes discharges). The viral "~44%" RGV figure is from hospitalized patients, not the general population.`,
 obesity:`<span class="stat">40–45%</span> of adults vs ~33% nationally, with the highest point estimate in <strong>Starr (45.0%)</strong> (wide CI); childhood obesity is worse (≈ a third of Hidalgo boys overweight, among the nation's highest). The proximate driver of the region's diabetes/hypertension clustering, reinforced by ~20% food insecurity and limited safe activity space.`,
 bphigh:`About a third of adults — near the U.S. crude rate (34.4%) in Cameron and Hidalgo, above it in <strong>Starr (36.6%)</strong> and <strong>Willacy (36.5%)</strong> (overlapping CIs); the population is young, so age-specific risk is higher than the crude figure suggests. Among adults with hypertension, 73–76% take medication (U.S. 77%), but control is incomplete — the access gap captured by the uninsured measure.`,
 highchol:`35–37% of screened adults — near the U.S. level (37.4%) despite a much younger population; with hypertension, diabetes and obesity it completes a textbook cardiometabolic cluster.`,
 chd:`At or above the U.S. rate (6.4%) in all four counties, highest in <strong>Willacy (7.7%)</strong> and <strong>Starr (7.6%)</strong>. Heart disease is the leading cause of death region-wide.`,
 stroke:`3.6–4.2%, edging above national (3.4%), tracking hypertension/diabetes. Stroke <em>death</em> rates (2022–2024) sit at or below Texas in every county — prevalence and death can diverge.`,
 copd:`Near/above U.S. (6.2%), with the highest point estimates in rural <strong>Starr & Willacy (7.2%)</strong> — the counties that also smoke the most (≈16–17%), with agricultural dust and heat adding occupational exposure.`,
 casthma:`8.7–9.3%, modestly below national, but border air-quality and agricultural exposures keep it clinically relevant; pediatric asthma recurs in needs assessments.`,
 cancer:`All-site (non-skin) prevalence is <span class="stat">below the U.S.</span> (~4–5% vs 7.9%) — a young-population artifact that masks site-specific excesses: registry data (2019–2023) put <strong>cervical cancer</strong> about 50% above the U.S. rate and <strong>liver cancer</strong> about 1.7–2.2× — see the Cancer chapter.`,
 arthritis:`20–22%, below the U.S. crude rate (25.4%) largely because the population is young; age-adjusted Starr (23.0%) runs above its crude figure — an age-specific musculoskeletal burden tied to obesity and manual labor.`,
 ckd:`<span class="stat">Chronic kidney disease is not published in the mappable PLACES set</span>, so it is not charted here — but it is a central RGV concern: CKD is a direct sequela of the region's exceptional diabetes and hypertension burden, and the Valley's high diabetes-amputation and dialysis demand are downstream signals. National adult CKD runs ~14% (mostly undiagnosed); in a population with ~18–20% diagnosed diabetes, the true CKD burden is materially higher. Treat the diabetes and hypertension numbers above as the leading indicators.`,
 depression:`19–21%, near national (20.2%), against some of Texas's thinnest behavioral-health infrastructure — a defining need-vs-supply gap.`,
 mhlth:`Frequent mental distress 16–20% — at or above the U.S. (15.6%) — with the highest point estimate in <strong>Starr (19.5%)</strong> (overlapping CIs); combined with provider shortage and uninsurance, a large unmet need.`,
 ghlth:`Self-rated fair/poor health runs <span class="stat">1.6–2.1× the U.S.</span> (19.2%), reaching <strong>40.3% in Starr</strong> — one of the starkest disparities, tracking the poverty gradient.`,
 disability:`37–46% vs national 30%, with the highest point estimate in <strong>Starr (45.5%)</strong>; mobility/cognition limitations dominate, reflecting accumulated chronic-disease complications.`,
 access2:`The defining structural driver: <span class="stat">36–44% of working-age adults uninsured</span>, more than three times the U.S. (11%) and about double Texas (19%) — concentrated in colonias and among agricultural/immigrant workers, delaying diagnosis and undermining control of every condition above.`,
 lpa:`More than a third (47% in Starr) report no leisure-time activity, vs 24.5% nationally — both cause and target; Valley programs increasingly focus on walkability and built environment.`,
 csmoking:`13% in Cameron/Hidalgo — modestly above the U.S. (11.4%) — and higher in rural Starr (16.9%) and Willacy (16.4%). The excess is small next to the region’s large obesity and diabetes excess, so metabolic factors — more than tobacco — drive the RGV risk profile.`
};

/* ===== DEEP — plain-language condition deep-dives, keyed by measure id (+ ckd).
   Each entry: {what, why, connects, family}. Rendered as the four-section deep-dive body. ===== */
const DEEP={
 diabetes:{what:`Type 2 diabetes means the body can no longer keep blood sugar in a healthy range, usually because it stops responding well to insulin. Over years, high blood sugar quietly damages blood vessels, nerves, kidneys, eyes, and feet. "Diagnosed" means a doctor has confirmed it — many more people have it and do not yet know.`,why:`The Valley carries one of the heaviest diabetes burdens in the country. A young but rapidly aging population, very high obesity, limited access to affordable fresh food, and the nation's highest uninsured rates mean the disease is common, caught late, and hard to control.`,connects:`Diabetes sits at the center of almost everything else here. It drives high blood pressure, high cholesterol, heart disease, stroke, chronic kidney disease, and the Valley's nation-leading rate of diabetes-related amputations.`,family:`It is largely preventable and very manageable. Knowing your numbers (A1c and blood pressure), steady physical activity, and affordable medicines keep complications away. If cost or coverage is a barrier, community clinics can help — early control is what saves feet, kidneys, and eyesight.`},
 obesity:{what:`Obesity is an amount of body fat high enough to raise the risk of other diseases, commonly measured as a body-mass index (BMI) of 30 or more. It is shaped far more by environment and food supply than by willpower.`,why:`Roughly 4 in 10 adults here have obesity. Inexpensive calorie-dense food is everywhere while fresh produce is costly or far away, about 1 in 5 households face food insecurity, and many neighborhoods lack safe places to be active.`,connects:`Obesity is the upstream driver of the Valley's diabetes, high blood pressure, and high cholesterol cluster, and it worsens arthritis and fatty-liver disease.`,family:`Small, sustainable changes matter more than crash diets: everyday movement, water instead of sugary drinks, and home-cooked staples. Childhood obesity is especially high here, so family habits set the path for the next generation.`},
 bphigh:{what:`High blood pressure (hypertension) means the force of blood against the artery walls stays too high. It usually causes no symptoms — which is why it is called a silent condition — but untreated it damages the heart, brain, and kidneys.`,why:`A third or more of Valley adults have it, tracking the region's diabetes and obesity. Many take medication, but without steady care and coverage, blood pressure often stays uncontrolled.`,connects:`High blood pressure is a leading cause of stroke, heart disease, and kidney failure, and it compounds the damage diabetes already does to blood vessels.`,family:`It is cheap and easy to check — at a clinic, a pharmacy, or with a home monitor. Most cases are controllable with low-cost generic medicine, less salt, and activity. Because it is silent, regular checking is the whole game.`},
 highchol:{what:`High cholesterol means too much of certain fats in the blood, which build up inside arteries and narrow them over time. Like high blood pressure, it has no symptoms.`,why:`More than a third of screened adults here have it — about the national level even though the Valley is much younger — part of the same diet-and-metabolism pattern driving diabetes and obesity.`,connects:`Together with high blood pressure, diabetes, and obesity it forms a textbook cardiometabolic cluster that ends in heart disease and stroke — the region's leading killers.`,family:`A simple blood test detects it. Diet, activity, and inexpensive statin medicines lower it effectively, and treating it early prevents heart attacks decades later.`},
 chd:{what:`Coronary heart disease is the narrowing of the arteries that feed the heart muscle, which can cause chest pain and heart attacks. It is the end result of years of cardiovascular risk.`,why:`Rates run above the U.S. in most Valley counties because the upstream risks — diabetes, high blood pressure, high cholesterol, and obesity — are all elevated and often undertreated.`,connects:`It is the downstream destination of the cardiometabolic cluster, and heart disease is the number-one cause of death across the region.`,family:`Much of it is preventable by controlling blood pressure, sugar, and cholesterol. Learn the warning signs of a heart attack and call 911 — minutes of delay cost heart muscle, and rural distance to care makes early action critical.`},
 stroke:{what:`A stroke happens when blood flow to part of the brain is cut off, by a clot or a bleed, causing brain cells to die. It can cause lasting disability or death and is a medical emergency.`,why:`Stroke prevalence edges above the national level, tracking the Valley's high blood pressure and diabetes. Stroke death rates sit at or below the Texas rate in every county — prevalence and mortality do not always move together.`,connects:`Stroke shares its roots with heart disease: uncontrolled blood pressure and diabetes are the main drivers.`,family:`Learn the signs with F.A.S.T. — Face drooping, Arm weakness, Speech difficulty, Time to call 911. Controlling blood pressure is the single most powerful way to prevent one.`},
 copd:{what:`COPD (chronic obstructive pulmonary disease) is long-term lung damage that makes breathing harder, including chronic bronchitis and emphysema.`,why:`Rates are highest in rural Starr and Willacy, which also have the region's highest smoking rates — and where agricultural dust, heat and air quality add occupational and environmental exposure on top of tobacco.`,connects:`It compounds the region's heart and metabolic disease and limits the physical activity that helps prevent diabetes and obesity.`,family:`If you work around dust, smoke, or fumes, protect your lungs and mention any lasting cough or breathlessness to a clinician. Avoiding tobacco and managing flare-ups keeps the disease from progressing.`},
 casthma:{what:`Asthma is a condition in which the airways tighten and inflame, causing wheezing, coughing, and shortness of breath. "Current" asthma counts people who still have it, not just a past diagnosis.`,why:`Valley rates sit modestly below the national average, but border air quality and agricultural exposures keep it clinically important, and pediatric asthma keeps appearing in community needs assessments.`,connects:`Like COPD, asthma reflects the region's air and occupational environment and limits physical activity.`,family:`Asthma is very manageable with the right inhalers and an action plan. Knowing your child's triggers and keeping rescue medicine on hand prevents emergency visits.`},
 cancer:{what:`This measures adults ever told they have cancer other than skin cancer. A single number hides large differences between cancer types.`,why:`Overall cancer prevalence is actually below the U.S. here — partly because the population is young — but that average masks specific excesses: cervical cancer runs about 50% above the U.S. rate and liver cancer roughly double it (State Cancer Profiles, 2019–2023).`,connects:`Several local cancers tie back to the same forces seen elsewhere here: obesity and fatty-liver disease (liver cancer) and gaps in screening access (cervical cancer).`,family:`Screening is the most powerful tool — Pap and HPV tests for cervical cancer, plus colon and breast screening — catching these cancers early or preventing them outright. Low-cost screening programs exist in the Valley.`},
 arthritis:{what:`Arthritis is ongoing joint inflammation that causes pain and stiffness and can limit movement. It becomes more common with age.`,why:`Crude rates look lower than the U.S. because the population is young, but age-adjusted Starr nears the national figure — the age-specific burden is high, tied to obesity and years of manual and agricultural labor.`,connects:`Arthritis pain discourages physical activity, which feeds back into obesity, diabetes, and heart disease.`,family:`Staying active within comfort, managing weight, and treating pain early keep joints working. It is a major reason people stop moving, so it matters more than its mild reputation suggests.`},
 depression:{what:`Depression is a common, treatable medical condition that affects mood, energy, sleep, and the ability to function — not a personal weakness.`,why:`Rates are near the national average, but they meet some of Texas's thinnest mental-health infrastructure, so the gap between people who need care and providers who can give it is wide.`,connects:`Depression and chronic physical illness feed each other — diabetes, pain, and disability raise depression risk, and depression makes those conditions harder to manage.`,family:`It responds well to treatment — talk therapy, medication, or both. Reaching out is a strength; community clinics and telehealth are expanding options in the Valley, and a trusted doctor is a good first step.`},
 mhlth:{what:`Frequent mental distress means reporting 14 or more days of poor mental health in the past month — a marker of sustained stress, anxiety, or depression heavy enough to affect daily life.`,why:`It is highest in Starr and, combined with provider shortages and high uninsurance, signals a large unmet need for mental-health support across the region.`,connects:`It overlaps with depression and is worsened by financial strain, chronic illness, and caregiving — all common pressures here.`,family:`Persistent distress is a signal to seek support, not to tough it out. Talking to a clinician, counselor, or trusted person, and protecting sleep and connection, all help.`},
 ghlth:{what:`This is the share of adults who rate their own health as fair or poor — a simple self-report that strongly predicts future illness, disability, and death.`,why:`In the Valley it runs roughly 1.6 to 2 times the U.S. level, reaching about 40% in Starr — one of the starkest disparities in the data, closely tracking poverty.`,connects:`It is the lived sum of everything else on this page: diabetes, pain, mental distress, and untreated conditions all pull self-rated health down.`,family:`Because it captures how people actually feel, improvement here is the real goal — and it follows from controlling the specific conditions and barriers described in the other cards.`},
 disability:{what:`Disability here means a serious difficulty with everyday functions — walking, thinking and remembering, seeing, hearing, self-care, or living independently.`,why:`More than a third of Valley adults report a disability, far above the national figure and peaking in Starr, largely from mobility and cognitive limitations that follow years of chronic disease.`,connects:`It is often the downstream result of uncontrolled diabetes, heart disease, stroke, and arthritis — a sign of complications accumulating.`,family:`Many disabilities are preventable or can be delayed by controlling the underlying conditions early. For those already affected, support services and accessible care make a real difference in independence.`},
 access2:{what:`This is the share of working-age adults (18 to 64) with no health insurance. It is not a disease, but it shapes the outcome of every disease on this page.`,why:`This is the defining structural driver in the Valley: roughly 36 to 44% of working-age adults are uninsured — more than three times the U.S. rate — concentrated in colonias and among agricultural and immigrant workers.`,connects:`Being uninsured delays diagnosis and undermines control of diabetes, blood pressure, cholesterol, and cancer — it is the thread running through nearly every gap in these numbers.`,family:`Coverage and low-cost care exist but can be hard to find: community health centers (FQHCs) serve patients regardless of insurance or ability to pay. Knowing where to go is half the battle.`},
 lpa:{what:`This measures adults who get no leisure-time physical activity — no exercise or active recreation outside of work — in a typical month.`,why:`About a third of adults, and nearly half in Starr, report none, reflecting demanding work, heat, and a built environment with few safe places to walk or play.`,connects:`Inactivity is both a cause and a consequence of the region's obesity, diabetes, and arthritis.`,family:`Activity does not require a gym — walking, dancing, and play all count. Valley programs increasingly focus on walkable streets and parks, because the environment, not motivation, is the main barrier.`},
 csmoking:{what:`Current smoking is the share of adults who smoke cigarettes now. Tobacco remains a leading preventable cause of disease.`,why:`Smoking runs modestly above the U.S. level in Cameron and Hidalgo and higher in rural Starr and Willacy. Still, that excess is small next to the Valley's obesity and diabetes burden — metabolic factors, more than tobacco, dominate the local risk picture.`,connects:`Where present, smoking adds to COPD, heart disease, stroke, and cancer risk.`,family:`Quitting at any age brings fast benefits, and free quitlines and clinic support make it easier. But the bigger Valley story is that controlling weight, sugar, and blood pressure matters even more here than tobacco.`},
 ckd:{what:`Chronic kidney disease (CKD) is the slow loss of the kidneys' ability to filter the blood. It is usually silent until advanced, when it can require dialysis or a transplant.`,why:`CKD is not published in the mappable PLACES dataset, so it is not charted here — but it is a central Valley concern. It is a direct consequence of the region's exceptional diabetes and high-blood-pressure burden, and the Valley's high amputation and dialysis demand are downstream signals.`,connects:`Diabetes and high blood pressure are the two leading causes of CKD; treat the diabetes and blood-pressure cards above as the leading indicators of kidney risk here.`,family:`A simple blood and urine test detects CKD early, when controlling sugar and blood pressure can slow or stop it. If you have diabetes or high blood pressure, ask your clinician about a yearly kidney check.`}
};
