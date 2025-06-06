// Utility to get URL parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Sample data for units and PYQs per subject
const unitsData = {
  HV: [
    { id: 1, name: "Unit 1: Introduction", pdf: "https://drive.google.com/file/d/1BS9_auP-MwZrmKRli7YMMup4vutssIqK/view?usp=sharing" },
    { id: 2, name: "Unit 2: Understanding Harmony in the Human Being", pdf: "https://drive.google.com/file/d/1BdeNOzPRzns1J-Yak9ql3YWiE-dA-VtK/view?usp=sharing" },
    { id: 3, name: "Unit 3: Understanding Harmony in the Family and Society", pdf: "https://drive.google.com/file/d/1JG89gDktIOgy4nOfN3ZyVI_MkgMvF_AA/view?usp=sharing" },
    { id: 4, name: "Unit 4: Understanding Harmony in the Nature and Existence", pdf: "https://drive.google.com/file/d/1AKnZt2AgvUispYUqd7ckIgJvOqH1NHaZ/view?usp=sharing" },
    { id: 5, name: "Unit 5: Harmony on Professional Ethics", pdf: "https://drive.google.com/file/d/1elsnBZD7qovD0E_aTSbegTjlBAKT098v/view?usp=sharing" },
  ],
  EM1: [
    { id: 1, name: "Unit 1: Calculus", pdf: "" },
    { id: 2, name: "Unit 2: Sequences and Series", pdf: "" },
    { id: 3, name: "Unit 3: Fourier Series", pdf: "" },
    { id: 4, name: "Unit 4: Multivariable Calculus (Differentiation)", pdf: "" },
    { id: 5, name: "Unit 5: Multivariable Calculus (Integration)", pdf: "" },
  ],
  BME: [
    { id: 1, name: "Unit 1: Fundamentals", pdf: "https://drive.google.com/file/d/1FXiuCQLfKONZ_G1gb0kJqRh7FVLX9179/view?usp=sharing" },
    { id: 2, name: "Unit 2: Pumps and IC Engines", pdf: "https://drive.google.com/file/d/1KZPXtHRzq74kP4-4Ds0tv1TdbxHCLnfv/view?usp=sharing" },
    { id: 3, name: "Unit 3: Refrigeration and Air Conditioning", pdf: "https://drive.google.com/file/d/1XKthW2OuU5MKbHG6nJJrBItoXjnVR_lo/view?usp=sharing" },
    { id: 4, name: "Unit 4: Transmission of Power", pdf: "https://drive.google.com/file/d/1nxAWQYLBtsMU6FdFacHuc93LFmOllXiP/view?usp=sharing" },
    { id: 5, name: "Unit 5: Primary Manufacturing Processes", pdf: "https://drive.google.com/file/d/1vHFWAk-KxEh2qJWYhMsn5d1mGKX2YHEs/view?usp=sharing" },
    { id: 6, name: "Unit 6: Engineering Materials and Heat Treatment of Steel", pdf: "https://drive.google.com/file/d/1369i-33aga7LC2UyJtazWRd6olAtrzdx/view?usp=sharing" },
  ],
  BCE: [
    { id: 1, name: "Unit 1: Introduction", pdf: "https://drive.google.com/file/d/1C3dfABHr6DGKcrA5dFPzBBy2jmPLJu1V/view?usp=sharing" },
    { id: 2, name: "Unit 2: Surveying", pdf: "https://drive.google.com/file/d/1LZZbT7gDRodrB7oSuLzEqYc6m8ZJXc5G/view?usp=sharing" },
    { id: 3, name: "Unit 3: Building", pdf: "https://drive.google.com/file/d/1vLpAzo18PiivFJ25S0N92Ojxfby3DPMv/view?usp=sharing" },
    { id: 4, name: "Unit 4: Transportation", pdf: "https://drive.google.com/file/d/1uOa38tGCf_67O0LSpZng9ejQP0FEnTc7/view?usp=sharing" },
    { id: 5, name: "Unit 5: Environmental Engineering Converted", pdf: "https://drive.google.com/file/d/1alwfZmNnlrUbMJR7-tRRGyVzKvXRpbqp/view?usp=sharing" },
    { id: 6, name: "Unit 6: Environmental Engineering", pdf: "https://drive.google.com/file/d/19mW7nROBtB0AbhbPUcpd2TwWZWq94Rr9/view?usp=sharing" },
  ],
  EC: [
    { id: 1, name: "Unit 1: Water", pdf: "https://drive.google.com/file/d/1gKsYfctcQ2Eg0z4qt0AYNuIl9rRQIJ22/view?usp=sharing" },
    { id: 2, name: "Unit 1: Water", pdf: "https://drive.google.com/file/d/1s2SpcVemxHC4pcy1kGHApr-yKlI2xgO0/view?usp=sharing" },
    { id: 3, name: "Unit 2: Organic Fuels", pdf: "https://drive.google.com/file/d/1pKZhTbCsA2_pJTNRjIEPZp2DtrFS3fCo/view?usp=sharing" },
    { id: 4, name: "Unit 3: Corrosion and its Control", pdf: "https://drive.google.com/file/d/1wwJw-HkAezAFfuDZPHUuj5QNie058tIr/view?usp=sharing" },
    { id: 5, name: "Unit 4: Cement", pdf: "https://drive.google.com/file/d/1JRzcy77YAbF2r9DiCbE4_ewfLKmh8B9D/view?usp=sharing" },
    { id: 6, name: "Unit 4: Glass", pdf: "https://drive.google.com/file/d/1-EPW7oyIL9v4QJcunFVJe5VecCCBnBAV/view?usp=sharing" },
    { id: 7, name: "Unit 4: Lubricants", pdf: "https://drive.google.com/file/d/1Q3syKevI5XM8mwQyALyBXMM2JoeWKmYv/view?usp=sharing" },
    { id: 8, name: "Unit 5: Organic Reactions", pdf: "https://drive.google.com/file/d/1lQ-JFZRS7HSVh95MpH7OU7Z5PF5lu0bl/view?usp=sharing" },
  ],
  EP: [
    { id: 1, name: "Unit: 1 - Wave Optics", pdf: "https://drive.google.com/file/d/1GpGXnKS4AUAMiAfLZ79IrO3yFMlt-tFW/view?usp=sharing" },
    { id: 2, name: "Unit: 2 - Quantum Mechanics", pdf: "https://drive.google.com/file/d/1s0fj4G4hSeWb3COM9aSWJmrEojCK9bMU/view?usp=sharing" },
    { id: 3, name: "Unit: 3 - Coherence and Optical Fibers", pdf: "https://drive.google.com/file/d/13a5YVVn0DCWkSGs8Cwkt2GWnotEsxa-w/view?usp=sharing" },
    { id: 4, name: "Unit: 4 - Laser", pdf: "https://drive.google.com/file/d/1msAspkFNwsOE7oJk35bN-4TJOBYke0GO/view?usp=sharing" },
    { id: 5, name: "Unit: 5 - Material Science & Semiconductor Physics", pdf: "https://drive.google.com/file/d/1OPTEHkgraw_-BrEANo_PJJfdLqFUmVT_/view?usp=sharing" },
    { id: 6, name: "Unit: 6 - Introduction to Electromagnetism", pdf: "https://drive.google.com/file/d/1d_MTHoHr5ZI4yii778YXNj4M8q-YiPWn/view?usp=sharing" }
  ],
  PPS: [
    { id: 1, name: "Unit: 3 - Array", pdf: "https://drive.google.com/file/d/1vVBzWLm-hQ5EC0wlLUP73bNGAzp55BCG/view?usp=sharing" },
    { id: 2, name: "Unit: 3 - C Notes", pdf: "https://drive.google.com/file/d/1eBRyfYYIeDt4-4D4tLkQHd22508KElDg/view?usp=sharing" },
    { id: 3, name: "Unit: 3 - Data Types", pdf: "https://drive.google.com/file/d/10Do9fA-EX7gsYcxkoALUMb06VgW0GFz2/view?usp=sharing" },
    { id: 4, name: "Unit: 3 - File Handeling", pdf: "https://drive.google.com/file/d/10zvxa32Sy1ZmWaPTmHY4O6ikxXsZgWmw/view?usp=sharing" },
    { id: 5, name: "Unit: 3 - Functions", pdf: "https://drive.google.com/file/d/1KzMlpognEA4ktytgUtX8LvNNn8kD-Pkt/view?usp=sharing" },
    { id: 6, name: "Unit: 3 - Pointers", pdf: "https://drive.google.com/file/d/1GeE9yZ59conKmvYx0_LjFcEn-AVFiWZX/view?usp=sharing" },
    { id: 7, name: "Unit: 3 - Structures", pdf: "https://drive.google.com/file/d/1yi9xvrtmIVvOicfYl-w911FhjeNw8e6K/view?usp=drive_link" }
  ],
  BEE: [
    { id: 1, name: "Unit: 1 - DC Circuits", pdf: "" },  // Waiting
    { id: 2, name: "Unit: 2 - AC Circuits", pdf: "https://drive.google.com/file/d/120CERJiXZIZwjiW_dl-zTDqnlmrwOTZl/view?usp=sharing" },
    { id: 3, name: "Unit: 3 - Transformers", pdf: "https://drive.google.com/file/d/1dAenGfvP44exEG1FHTaozFR0aeQ2JwOh/view?usp=sharing" },
    { id: 4, name: "Unit: 4 - Electrical Machines", pdf: "https://drive.google.com/file/d/14AIu5LrzEk0Pqw9OzXxezZkPJEwDAiHe/view?usp=sharing" },
    { id: 5, name: "Unit: 5 - Power Converters", pdf: "https://drive.google.com/file/d/1LFukrM3bPIhSO2AmvfxtH7ZXUSCxfipv/view?usp=sharing" },
    { id: 6, name: "Unit: 6 - Electrical Installations", pdf: "https://drive.google.com/file/d/1KngmFB8VoW3DRCJOnT6ql_L52R4nE77V/view?usp=sharing" }
  ],
  CS: [
    { id: 1, name: "Unit: 3 - Business Letter Writing", pdf: "https://drive.google.com/file/d/1M2S6H4ZW_AdzTjmeuu8OQZSqOe95Cv6W/view?usp=sharing" },
    { id: 2, name: "Unit: 3 - Curriculum Vitae Writing", pdf: "https://drive.google.com/file/d/1YIOuMrFHHltOdc2Ixyuv9CUFfzUQPuHO/view?usp=sharing" },
    { id: 3, name: "Unit: 3 - Paragraph Writing", pdf: "https://drive.google.com/file/d/1bgrbR_TL9yqvLk3NJDWzatpgWTtUqb-v/view?usp=sharing" },
    { id: 4, name: "Unit: 3 - Report Writing", pdf: "https://drive.google.com/file/d/1b7jjVWRbOoSDDwdEiTudOR-sp4in9w_y/view?usp=sharing" },
    { id: 5, name: "Unit: 4 - Short Stories", pdf: "https://drive.google.com/file/d/1sdonEH0gXaEnWueYau_umMbc5_ka1JVb/view?usp=sharing" },
    { id: 6, name: "Unit: 5 - Poems", pdf: "https://drive.google.com/file/d/1vvpaY__GBuxdhc8aCAt0E5z5FKDJhZ60/view?usp=sharing" }
  ],
  EM2: [
    { id: 1, name: "Unit: 1 Formulas - Matrices", pdf: "https://drive.google.com/file/d/1RRPwRczO2ILUDkiyAE6kb-WxgiPzfqKj/view?usp=sharing" },
    { id: 2, name: "Unit: 2 Formulas - First order ordinary differential equations", pdf: "https://drive.google.com/file/d/14V0JTNkfE7C6bho96jHCS9CSDErKBiFj/view?usp=sharing" },
    { id: 3, name: "Unit: 3 Formulas - Ordinary differential equations of higher orders", pdf: "https://drive.google.com/file/d/1z7DLbcH2U3qHikgmg-ewJ1jRA_UE9qQi/view?usp=sharing" },
    { id: 4, name: "Unit: 4 Formulas - Partial Differential Equations - First order", pdf: "https://drive.google.com/file/d/1Q33Nc5XyDdmHS7DKNob1qCa-FjhH1A1D/view?usp=sharing" },
    { id: 5, name: "Unit: 5 Formulas - Partial Differential Equations - Higher order", pdf: "https://drive.google.com/file/d/1Xl2aiw5dbSUYJ6yiPdI8zZHpRzskNaH1/view?usp=sharing" }
  ],
  DE: [
    { id: 1, name: "Unit 1: Fundamental concepts", pdf: "https://drive.google.com/file/d/13-p0OOBlE5vBLcimKWAkwyoOhiQlh6sB/view?usp=drive_link" },
    { id: 2, name: "Unit 2: Minimization Techniques and Logic Gates", pdf: "https://drive.google.com/file/d/1lnDyIEzFGxiUnHEQO_TaMQd8P-WFy8RQ/view?usp=drive_link" },
    { id: 3, name: "Unit 3: Digital Logic Gate Characteristics", pdf: "https://drive.google.com/file/d/1gRvRxGUx2lF0yHmEnTWqVrS6S25HOP9n/view?usp=sharing" },
    { id: 4, name: "Unit 4: Combinational Circuits", pdf: "https://drive.google.com/file/d/1lM5fwfHkcpSX3GJ0HIUOY8qKaBVdFHu0/view?usp=drive_link" },
    { id: 5, name: "Unit 5: Sequential Circuits", pdf: "https://drive.google.com/file/d/1TB7Ens67h5EYW4oPfakd5o6jC0yLC9Kv/view?usp=drive_link" },
  ],
  DSA: [
    { id: 1, name: "Unit 1: Stacks", pdf: "https://drive.google.com/file/d/1PB-2S_kIa9RFZHovYTVhdG70CAL0nWvs/view?usp=sharing" },
    { id: 2, name: "Unit 2: Queues", pdf: "https://drive.google.com/file/d/1XBSj1iNXF6EegJjzSsdi-2Tar4S5HpFJ/view?usp=sharing" },
    { id: 3, name: "Unit 3: Searching Techniques", pdf: "https://drive.google.com/file/d/1WwJw7gq0rAeJ_Eqc4g-gejasYqtFpg_Z/view?usp=sharing" },
    { id: 4, name: "Unit 4: Trees", pdf: "https://drive.google.com/file/d/1cg6qX-a3Kd8dsf19aQAU5VgXQefLmSy7/view?usp=sharing" },
    { id: 5, name: "Unit 5: Graphs", pdf: "https://drive.google.com/file/d/1p07WzR90LJEx6nP6--54I7DKmS1wDdxs/view?usp=sharing" },
  ],
  OOPS: [
    { id: 1, name: "Unit 1: Introduction", pdf: "https://drive.google.com/file/d/1MiY23pwdpXV1dhLSbnpPccti6PoxIffl/view?usp=sharing" },
    { id: 2, name: "Unit 2: Concept of reference", pdf: "https://drive.google.com/file/d/1R5YP3zsx21717YGgwACNUkmwiAzxlSlJ/view?usp=sharing" },
    { id: 3, name: "Unit 3: Inheritance", pdf: "https://drive.google.com/file/d/17ehh-LxhOC4XsSVbdQHlCRyiaToC7G0H/view?usp=sharing" },
    { id: 4, name: "Unit 4: Data Member and Member Function", pdf: "https://drive.google.com/file/d/1Mrm6OIW8DraeSsKOvdL97-o-TXoD3thF/view?usp=sharing" },
    { id: 5, name: "Unit 5: handling", pdf: "https://drive.google.com/file/d/1vm95zwlN-S71w5iYgrRGCR5rxZXNLEAf/view?usp=sharing" },
  ],
  SE: [
    { id: 1, name: "Unit 1: Introduction", pdf: "https://drive.google.com/file/d/1sqWtVmA3Bpbn1p3KHnPxv7AUTRBHQqVa/view?usp=sharing" },
    { id: 2, name: "Unit 2: Software Project Management", pdf: "https://drive.google.com/file/d/18UVz5g36isQciRd_4kqCWV4RgRmAsNda/view?usp=sharing" },
    { id: 3, name: "Unit 3: Requirement Analysis", pdf: "https://drive.google.com/file/d/1Buq5Yy4CBld-GWbNiYSHBBWkW1go7Lk5/view?usp=sharing" },
    { id: 4, name: "Unit 4: Software Design", pdf: "https://drive.google.com/file/d/1zUP6mpdRTkmLvH0usnzHauBgmFcPkAsf/view?usp=sharing" },
    { id: 5, name: "Unit 5: Object Oriented Analysis", pdf: "https://drive.google.com/file/d/1gSt78anWWLG5dL2mLsBdsvpe_9Kxpp_g/view?usp=sharing" },
  ],
  MEFA: [
    { id: 1, name: "Unit 1: Basic economic concepts", pdf: "https://drive.google.com/file/d/1TbxMVCUdzjkogvz0j2q1opEOQqW7jK40/view?usp=sharing" },
    { id: 2, name: "Unit 2: Demand and Supply analysis", pdf: "https://drive.google.com/file/d/1BdFmHgBZgYJ5T1FeYuyMAVoqpoB01r1x/view?usp=sharing" },
    { id: 3, name: "Unit 3: Production and Cost analysis", pdf: "https://drive.google.com/file/d/1G7c5rZ_i9FShxjIAQa0ml444ti1hB6XS/view?usp=sharing" },
    { id: 4, name: "Unit 4: Market structure and pricing theory", pdf: "https://drive.google.com/file/d/12cLeuCz6nhkR4b1d_qC3bTWxwj75rHfN/view?usp=sharing" },
    { id: 5, name: "Unit 5: Financial statement analysis", pdf: "https://drive.google.com/file/d/1x3IjaCkJ7z09KbqgesPFwZ0fDcMQEi0v/view?usp=sharing" },
  ],
  AEM: [
    { id: 1, name: "Unit 1: Random Variables", pdf: "Waiting..." },
    { id: 2, name: "Unit 2: Binomial distribution", pdf: "https://drive.google.com/file/d/1qi0J3j9SDF-2EC0-EvroTFge3iuxXTKd/view?usp=sharing" },
    { id: 3, name: "Unit 3: Historical development", pdf: "https://drive.google.com/file/d/1Jkf2Kdewwg8AehFfrB_Po5ERzgIyKoF5/view?usp=sharing" },
    { id: 4, name: "Unit 4: Classical Optimization using Differential Calculus", pdf: "https://drive.google.com/file/d/1M5fbsuQTlq26yoE46HIUpuWmg3-eCKpD/view?usp=sharing" },
    { id: 5, name: "Unit 5: Linear Programming", pdf: "https://drive.google.com/file/d/1YEXywm7Wt9IABbzeYGZHglX_8laiU2Kg/view?usp=sharing" },
  ],
  DBMS: [
    { id: 1, name: "Unit 1: Introduction", pdf: "https://drive.google.com/file/d/1SLj4SU6Xf-xf6hytzoxkUvRCfLNrgY20/view?usp=sharing" },
    { id: 2, name: "Unit 2: Relationship Algebra and Calculus", pdf: "https://drive.google.com/file/d/1sMdHx-l7PQNt5J8A7vSdm9JVTJX8Cz0q/view?usp=sharing" },
    { id: 3, name: "Unit 3: Schema refinement and Normal forms", pdf: "https://drive.google.com/file/d/1Cbit0VVYa3VnkDvoTFwQyAlmCMdoejwx/view?usp=sharing" },
    { id: 4, name: "Unit 4: Transaction Processing", pdf: "https://drive.google.com/file/d/1pUkAA2g0uqwaHfQDAaj9DvKDnYkQoxL_/view?usp=sharing" },
    { id: 5, name: "Unit 5: Concurrency Control", pdf: "https://drive.google.com/file/d/1kLcaeOJWn7OQWlZC04Z_-LObDXu2WFv_/view?usp=sharing" },
  ],
  TOC: [
    { id: 1, name: "Unit 1: Introduction", pdf: "https://drive.google.com/file/d/1CiH4UNHiPAn8QApoCipdN8MsK7BQHvXi/view?usp=sharing" },
    { id: 2, name: "Unit 2: Finite Automata & Regular Expression", pdf: "https://drive.google.com/file/d/1k6lq_RmtJRxJS07PhJqvs0QOh_4xPiNa/view?usp=sharing" },
    { id: 3, name: "Unit 3: Context Free Grammars", pdf: "https://drive.google.com/file/d/1xiiT4qw-FTazczGXadHzTUfOqRVTQ-uU/view?usp=sharing" },
    { id: 4, name: "Unit 4: NPDA and PDA", pdf: "https://drive.google.com/file/d/18uOGhRp8KYFW6SFpLIZgh61qtv5coINa/view?usp=sharing" },
    { id: 5, name: "Unit 5: Turing Machines", pdf: "https://drive.google.com/file/d/1WvRv3IC3WfDonUKnQ3HjoaJQkIuBla-4/view?usp=sharing" },
    { id: 6, name: "Unit 6: Tractable and Untractable Problems", pdf: "https://drive.google.com/file/d/1oxiCBUp-9SkIdlvcr2UvjUozAgRTlB-x/view?usp=sharing" },
  ],
  MPI_CSE: [
    { id: 1, name: "Unit 1: Introduction to Microprocessor", pdf: "https://drive.google.com/file/d/1nAtLR5PlAazuWIy4YENgpAz8NfWASIW8/view?usp=sharing" },
    { id: 2, name: "Unit 2: Software Architectureof the Microprocessor", pdf: "https://drive.google.com/file/d/1lF8ZNEFlUHXer-61zmNoYZtn4bsuCXDL/view?usp=sharing" },
    { id: 3, name: "Unit 3: Assembly Language Programming", pdf: "https://drive.google.com/file/d/1xqZ-vEuXJwJUhnHPGmBLXyl1D1d66ENX/view?usp=sharing" },
    { id: 4, name: "Unit 4: 8085 Microprocessor Interfacing", pdf: "https://drive.google.com/file/d/1mcnXNFbcqdnhvldr0Uh_SjA2qPjOq3uS/view?usp=sharing" },
    { id: 5, name: "Unit 5: Microprocessor Application", pdf: "https://drive.google.com/file/d/1whQS1-TYtGXCDlBdWRAKgfhrV0UiA_5r/view?usp=sharing" },
  ],
  POC: [
    { id: 1, name: "Unit 1.1: Analog Modulation", pdf: "https://drive.google.com/file/d/1VS5KJc5CrtgQfXly_nFrxbmHdKV_y5EG/view?usp=sharing" },
    { id: 2, name: "Unit 1.2: Angle Modulation", pdf: "https://drive.google.com/file/d/1PJ93anrBYvucAypFHS4GqV59PlLN1e_1/view?usp=sharing" },
    { id: 3, name: "Unit 4: Digital Modulation", pdf: "https://drive.google.com/file/d/1tKDoRP0OThXAvLHvwBkd1AxYUlAwmkyB/view?usp=sharing" },
    { id: 4, name: "Unit 5.1: Internal Symbol Interference", pdf: "https://drive.google.com/file/d/1Xlvc4-KFsZ1e1NVhJKCmnvTAtT7yPloC/view?usp=sharing" },
    { id: 5, name: "Unit 5.2: Spread Spctrum Modulation", pdf: "https://drive.google.com/file/d/1k2j1V4MTV3iOQREbCPby5kCpShOJv63A/view?usp=sharing" },
  ],
  TC: [
    { id: 1, name: "Unit 1 & 2: Introduction", pdf: "https://drive.google.com/file/d/1nikhlmGdB3smEygm6s0N9-4Iw0sWJsCd/view?usp=sharing" },
    { id: 2, name: "Unit 2 & 3: Introduction to Technical Communication", pdf: "https://drive.google.com/file/d/1sdaKf5JW4UWrLhzkMdtyzSyUV68hJZYh/view?usp=sharing" },
  ],
  DCCN: [
    { id: 1, name: "Unit 1: Introductory Concepts", pdf: "https://drive.google.com/file/d/1BUn-hIq7WWH0RwdKRG5ISCg7s0Xh4yx-/view?usp=sharing" },
    { id: 2, name: "Unit 2: Data Link Layer", pdf: "https://drive.google.com/file/d/1DffyrDwJ4NRFXFHhHQxtasAgwXigsoWc/view?usp=sharing" },
    { id: 3, name: "Unit 3: Network Layer", pdf: "https://drive.google.com/file/d/1obi8S_MyBnlLNNx07V7-b2-s5Ow_CTu3/view?usp=sharing" },
    { id: 4, name: "Unit 4: Transport Layer", pdf: "https://drive.google.com/file/d/1SYiIA2eNm1U5Y8cQiKKEH43_PaFzTHCd/view?usp=sharing" },
    { id: 5, name: "Unit 5: Application Layer", pdf: "https://drive.google.com/file/d/1oRdXkI3VdDppNiwnAhv119M8vFzke0zF/view?usp=sharing" },
  ],
  DMS: [
    { id: 1, name: "Unit 1: Set Theory", pdf: "https://drive.google.com/file/d/1xjxF93oAZkH3Si7YrLMwgNhF7mugzMXt/view?usp=sharing" },
    { id: 2, name: "Unit 2: Propositional Logic", pdf: "https://drive.google.com/file/d/1YVKOErGJDXzijV35UcE7HELXlEAm2-d5/view?usp=sharing" },
    { id: 3, name: "Unit 3: Function", pdf: "https://drive.google.com/file/d/1dLJDFu-X1-CjQi4YqqmP7BuRupQBD5qL/view?usp=sharing" },
    { id: 4, name: "Unit 4: Algebraic Structures", pdf: "https://drive.google.com/file/d/1VZmj97nIvJXIuMj_WzWpDYEvmyqgY7JB/view?usp=sharing" },
    { id: 5, name: "Unit 5: Graph Theory", pdf: "https://drive.google.com/file/d/15FRYURU4GIpckWOhbXIF1gX9MUeTfWeq/view?usp=sharing" },
  ],
  AOA: [
    { id: 1, name: "Unit 1: Background and Divide And Conquer Method", pdf: "" },
    { id: 2, name: "Unit 2: Greedy Method and Dynamic Programming", pdf: "" },
    { id: 3, name: "Unit 3: BranchAnd Bound", pdf: "" },
    { id: 4, name: "Unit 4: Pattern Matching Algorithms", pdf: "" },
    { id: 5, name: "Unit 5: Assignment and Randomized Algorithms", pdf: "" },
    { id: 6, name: "Unit 6: Tractable and Untractable Problems", pdf: "" }
  ],
  CD: [
    { id: 1, name: "Unit 1: Introduction", pdf: "" },
    { id: 2, name: "Unit 2: Review of CFG Ambiguity of grammars", pdf: "" },
    { id: 3, name: "Unit 3: Syntax directed definitions", pdf: "" },
    { id: 4, name: "Unit 4: Storage organization", pdf: "" },
    { id: 5, name: "Unit 5: Definition of basic block control", pdf: "" },
    { id: 6, name: "Unit 6: Flow Graphs", pdf: "" }
  ],
  ITC: [
    { id: 1, name: "Unit 1: Introduction to information theory", pdf: "" },
    { id: 2, name: "Unit 2: Source coding schemes for data compaction", pdf: "https://drive.google.com/file/d/1MQyB8R5F0aw7Z9x-35i_RO8dMexY6KVM/view?usp=sharing" },
    { id: 3, name: "Unit 3: Linear Block Code", pdf: "https://drive.google.com/file/d/1qemAfqYCSJ9NB81hqqLxIaPfPcnjvNT9/view?usp=sharing" },
    { id: 4, name: "Unit 4: Cyclic Code", pdf: "https://drive.google.com/file/d/1V5S22mN_44COsuDcH7-Jop-m2uRJ6dfo/view?usp=sharing" },
    { id: 5, name: "Unit 5: Convolutional Code", pdf: "https://drive.google.com/file/d/1Heq-DgGi_gdhjv-zHL4m0wDKHEK2OJwQ/view?usp=sharing" }
  ],
  CGM: [
    { id: 1, name: "Unit 1: Basic of Computer Graphics", pdf: "https://drive.google.com/file/d/1HM8_gpzMYOaYBsQlhz6CXPbFZ38gYAXi/view?usp=sharing" },
    { id: 2, name: "Unit 2: Graphics Primitives", pdf: "https://drive.google.com/file/d/1PDa2Eshgd1HaQokG4aYU3q0bNOWT3Rj9/view?usp=sharing" },
    { id: 3, name: "Unit 3: Two Dimensional Graphics", pdf: "https://drive.google.com/file/d/1vwWOcTZU9IBEMe06tr-JApWKhdeCiU5c/view?usp=sharing" },
    { id: 4, name: "Unit 4: Three Dimensional Graphics", pdf: "https://drive.google.com/file/d/18fNE60xbIvJBxNeBODS2VkWhK-3ARSvF/view?usp=sharing" },
    { id: 5, name: "Unit 5: Illumination and Colour Models", pdf: "https://drive.google.com/file/d/1plRHVSRK_4zFGI24oE7NnXAx41T7RUvm/view?usp=sharing" },
    { id: 6, name: "Unit 6: Animations & Realism", pdf: "https://drive.google.com/file/d/1xTTnOqlw7R5h1iqVRtTtQQgDSoz_Yhdl/view?usp=sharing" }
  ],
  OS: [
    { id: 1, name: "Unit 1: Processor management", pdf: "https://drive.google.com/drive/folders/12XXBdXIpQZu4oOwg62SxpdGzRIFcs0Vm?usp=sharing" },
    { id: 2, name: "Unit 2: Deadlock and Device management", pdf: "https://drive.google.com/drive/folders/13mMEC6cbiLmyb_cDl0admL6i11EK334v?usp=sharing" },
    { id: 3, name: "Unit 3: Memory management", pdf: "https://drive.google.com/file/d/17HxGtNuz6vHkUERh5gWMeKLhvu7c6END/view?usp=sharing" },
    { id: 4, name: "Unit 4: File management", pdf: "https://drive.google.com/file/d/1nrY-1e6HdHotk6JP1tO3ZSIA19psZAjn/view?usp=sharing" },
    { id: 5, name: "Unit 5: UNIX and Linux operating systems", pdf: "https://drive.google.com/file/d/1QF-KUWsHEOh6BoWdEOVbEH2mz3a8XSOH/view?usp=sharing" }
  ],
  WC: [
    { id: 1, name: "Unit 1: Introduction", pdf: "" },
    { id: 2, name: "Unit 2: Wireless Channels", pdf: "" },
    { id: 3, name: "Unit 3: Cellular Architecture", pdf: "" },
    { id: 4, name: "Unit 4: Digital Signaling For Fading Channels", pdf: "" },
    { id: 5, name: "Unit 5: Multipath Mitigation Techniques", pdf: "" },
    { id: 6, name: "Unit 6: Multiple Antenna Techniques", pdf: "" }
  ],
  MPI_IT: [
    { id: 1, name: "Unit 1: Introduction", pdf: "" },
    { id: 2, name: "Unit 2: 8085 Microprocessor Architecture", pdf: "" },
    { id: 3, name: "Unit 3: Assembly Language Programming", pdf: "" },
    { id: 4, name: "Unit 4: Stack & Subroutines", pdf: "" },
    { id: 5, name: "Unit 5: Interfacing Concepts", pdf: "" }
  ],
  DIP: [
    { id: 1, name: "Unit 1: Introduction to Image Processing", pdf: "https://drive.google.com/file/d/1-DJgNvfTf3nSOPGvSBgppEJ7ngUOA5zu/view?usp=sharing" },
    { id: 2, name: "Unit 2: Image Transformation & Filtering", pdf: "https://drive.google.com/file/d/1ga3fQe4QIou8ve6D2nSwbrInUSgEQZTX/view?usp=sharing" },
    { id: 3, name: "Unit 3: Image Restoration", pdf: "https://drive.google.com/file/d/1euSvb7rN3uP_wSDEuHFgcEjX4MMYbxod/view?usp=sharing" },
    { id: 4, name: "Unit 4: Image Compression", pdf: "https://drive.google.com/file/d/1vmjdu4fowagnEKtYkhte_fcWQRtKhVpr/view?usp=sharing" },
    { id: 5, name: "Unit 5: Image Segmentation & Representation", pdf: "https://drive.google.com/file/d/1oxLbCeDeeHPigf8ylgHLkhQVTcaUgTj7/view?usp=sharing" },
  ],
  CAO: [
    { id: 1.1, name: "Unit 1.1: Computer Data Representation", pdf: "https://drive.google.com/file/d/1z4lz6s_WPWuamjmkqgoGwoq7IMotu04n/view?usp=sharing" },
    { id: 1.2, name: "Unit 1.2: Computer Data Representation", pdf: "https://drive.google.com/file/d/1bmguyP51bhE-QPbfdadPNw2YilcXt_CK/view?usp=sharing" },
    { id: 1.3, name: "Unit 1.3: Computer Data Representation", pdf: "https://drive.google.com/file/d/1dTrRGW0CwVv2wCpdIxSIb5IoMxOOSoTV/view?usp=sharing" },
    { id: 2, name: "Unit 2: Programming The Basic Computer", pdf: "https://drive.google.com/file/d/1m_Ee-KlPPsVojjBr6QIy7ocaab-VHKzj/view?usp=sharing" },
    { id: 3, name: "Unit 3: Central Processing Unit", pdf: "https://drive.google.com/file/d/1Z6Xz495-QyagZ-m9c2cYqmCS0Mvr648F/view?usp=sharing" },
    { id: 4, name: "Unit 4: Computer Arithmetic", pdf: "https://drive.google.com/file/d/1jttgqk5nhs3tP6EEsKNwtCSmXJK7p_O0/view?usp=sharing" },
    { id: 5, name: "Unit 5: Memory Organization", pdf: "https://drive.google.com/file/d/1JABk6GQ4JcIHYkywPLXH3Cp3YzTID_Hs/view?usp=sharing" },
  ],
  ML: [
    { id: 1, name: "Unit 1: Supervised learning algorithm", pdf: "https://drive.google.com/file/d/15opTG3RA5yEvkCUQWL2RSD2wa0QhM_6M/view?usp=sharing" },
    { id: 2, name: "Unit 2: Unsupervised learning algorithm", pdf: "https://drive.google.com/file/d/1BOS9GVPM367MP4jg7u8IpGUQ7A0q8d12/view?usp=sharing" },
    { id: 3, name: "Unit 3: Introduction to Statistical Learning Theory", pdf: "https://drive.google.com/file/d/1m9_LvJqHXWa9Wa04d8VsQyqSTi1fEuLM/view?usp=sharing" },
    { id: 4, name: "Unit 4: Semi supervised learning", pdf: "https://drive.google.com/file/d/1djDEulQES9G3DWwJW-CXzSlMD7rElUyp/view?usp=sharing" },
    { id: 5, name: "Unit 5: Recommended system", pdf: "https://drive.google.com/file/d/1HzvzIhWNCYHz_e3bJMVTnTjFaXJn_wKB/view?usp=sharing" },
  ],
  CC: [
    { id: 1, name: "Unit 1: Introduction", pdf: "https://drive.google.com/file/d/1HHn8JlMh42cvYO2LBmtwK1tYLUXShgy_/view?usp=sharing" },
    { id: 2, name: "Unit 2: Cloud Computing Architecture", pdf: "https://drive.google.com/file/d/1EKFufqJbqO6Z6c61QovLOogo-CrUVjYI/view?usp=sharing" },
    { id: 3.1, name: "Unit 3.1: Virtualization Technology", pdf: "https://drive.google.com/file/d/1dkAPQcs5WCgDxHV4X4OEdFmDTGq5xUj_/view?usp=sharing" },
    { id: 3.2, name: "Unit 3.2: Virtualization Technology", pdf: "https://drive.google.com/file/d/1QAfsjLMZLpCECxQ79mD0ysfKuEwLEBOJ/view?usp=sharing" },
    { id: 4, name: "Unit 4: Securing the Cloud", pdf: "https://drive.google.com/file/d/1NoZlwULrUTHcSm3Cg1j75LWBJzbdwl4H/view?usp=sharing" }, 
    { id: 4, name: "Unit 4: Securing the Cloud (alternate)", pdf: "https://docs.google.com/document/d/1NivJlgw2wmFLh9DxUvT6ZVVxFC__maoV/edit?usp=sharing&ouid=112886811253295072375&rtpof=true&sd=true" },
    { id: 5, name: "Unit 5: Cloud Platforms in Industry", pdf: "https://drive.google.com/file/d/1yhll4IT3Sc2mY1OcKzhvcDJx43tNK_rg/view?usp=sharing" },
  ],
  AI: [
    { id: 1, name: "Unit 1: AI and Intelligent agent", pdf: "https://drive.google.com/file/d/1PrA_r-NPQCVfmz2RXFbWfftxfKmq9st6/view?usp=sharing" },
    { id: 2, name: "Unit 2: Game Playing", pdf: "https://drive.google.com/file/d/1gw2dkWHZMShX7L20laJE_24lGMiTEkdu/view?usp=sharing" },
    { id: 3, name: "Unit 3: Knowledge and Reasoning", pdf: "https://drive.google.com/file/d/18IS58-xVQf32R6MEyU-6oXC3OAMky9m/view?usp=sharing" },
    { id: 4, name: "Unit 4: Learning", pdf: "https://drive.google.com/file/d/1V7J4pSCtFW0RKnfroaOcxIPqZ_pUkue/view?usp=sharing" },
    { id: 5, name: "Unit 5: Introduction to Natural Language Processing", pdf: "https://drive.google.com/file/d/1SzjGERhIJxK7dtSg1070X_D_68SRIb_T/view?usp=sharing" },
  ],
  ISS: [
    { id: 1.1, name: "Unit 1.1: Introduction to security attacks", pdf: "https://drive.google.com/file/d/1Ach8eZj9e_ZoxCgVlof8lC00pqpfR3MJ/view?usp=sharing" },
    { id: 1.2, name: "Unit 1.2: Introduction to security attacks", pdf: "https://drive.google.com/file/d/1Hd7UW7qDwKz6bVUM3aEIkQccXvv4e2Kp/view?usp=sharing" },
    { id: 2, name: "Unit 2: Modern block ciphers", pdf: "https://drive.google.com/file/d/1Fs_zXgxEb2sOQOjk8qQV8MeyG42Nufai/view?usp=sharing" },
    { id: 3, name: "Unit 3: Public Key Cryptosystems with Applications", pdf: "https://drive.google.com/file/d/12UGHmccQLUBdAviXNgpUQzB-yCQ3c9H_/view?usp=sharing" },
    { id: 4, name: "Unit 4: Cryptographic Hash Functions", pdf: "https://drive.google.com/file/d/1WKyMSdREKHv9ch5x6XxhyLMnqpUENoTj/view?usp=sharing" },
    { id: 5, name: "Unit 5: Key management and distribution", pdf: "https://drive.google.com/file/d/14Csc-u9YiBb9q1u1X4_H0OKdAMIuUMsL/view?usp=sharing" },
  ],
  DS: [
    { id: 1, name: "Unit 1: Distributed Systems", pdf: "https://drive.google.com/file/d/1E_dhBGOW3_p6fwq-aHmA_uN1jPA8z5Q1/view?usp=sharing" },
    { id: 2, name: "Unit 2: Concurrent Processes and Programming", pdf: "https://drive.google.com/file/d/1fiYfaDqUFJ-505qW6ANuMsIULguRm64G/view?usp=sharing" },
    { id: 3, name: "Unit 3: Distributed Process Scheduling", pdf: "https://drive.google.com/file/d/1poBC_ilkueihLZ--JIqYoVyPomq0jGem/view?usp=sharing" },
    { id: 4, name: "Unit 4: Distributed Shared Memory", pdf: "https://drive.google.com/file/d/1pkGUg68a-WWyVMAKvt2jM8gwXs7JoINs/view?usp=sharing" },
    { id: 5, name: "Unit 5: Distributed Agreement", pdf: "https://drive.google.com/file/d/1I9i671CRbl1IwGyGkLq0PtQpV2KP7BHz/view?usp=sharing" },
  ],
  // HV: [
  //   { id: 1, name: "Unit 1: Mechanics", pdf: "pdfs/physics-unit1.pdf" },
  //   { id: 2, name: "Unit 2: Thermodynamics", pdf: "pdfs/physics-unit2.pdf" },
  //   { id: 3, name: "Unit 3: Optics", pdf: "pdfs/physics-unit3.pdf" },
  //   { id: 4, name: "Unit 4: Electromagnetism", pdf: "pdfs/physics-unit4.pdf" },
  //   { id: 5, name: "Unit 5: Modern Physics", pdf: "pdfs/physics-unit5.pdf" },
  // ],
  // Add more subjects and units as needed
};

// Load units and PYQs dynamically based on subject parameter
function loadUnitsAndPYQs() {
  const subject = getQueryParam("subject");
  const unitsList = document.getElementById("units-list");
  const pyqsList = document.getElementById("pyqs-list");

  unitsList.innerHTML = "";
  pyqsList.innerHTML = "";

  if (!subject) {
    unitsList.textContent = "Missing subject parameter.";
    pyqsList.textContent = "Missing subject parameter.";
    return;
  }

  const units = unitsData[subject];
  const pyqs = pyqsData[subject];

  if (!units || !pyqs) {
    unitsList.textContent = "No data available for this subject.";
    pyqsList.textContent = "No data available for this subject.";
    return;
  }

  // units.forEach((unit) => {
  //   const card = document.createElement("div");
  //   card.className = "category-card";
  //   card.innerHTML = `
  //     <span>${unit.name}</span>
  //     <a href="${unit.pdf}" target="_blank" rel="noopener noreferrer" class="download-btn" aria-label="Open ${unit.name} PDF">
  //       <i class="fas fa-file-pdf"></i> Download PDF
  //     </a>
  //   `;
  //   unitsList.appendChild(card);
  // });

  // pyqs.forEach((pyq) => {
  //   const card = document.createElement("div");
  //   card.className = "category-card";
  //   card.innerHTML = `
  //     <span>${pyq.name}</span>
  //     <a href="${pyq.pdf}" target="_blank" rel="noopener noreferrer" class="download-btn" aria-label="Open ${pyq.name} PDF">
  //       <i class="fas fa-file-pdf"></i> Download PDF
  //     </a>
  //   `;
  //   pyqsList.appendChild(card);
  // });
}

// Mobile menu toggle
function setupMenuToggle() {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadUnitsAndPYQs();
  setupMenuToggle();
});
