export const productCategories = [
    { id: 'all', label: 'All Products' },
    { id: 'Fire & Safety', label: 'Fire & Safety' },
    { id: 'Hazardous Area', label: 'Hazardous Area' },
    { id: 'Automation & Controls', label: 'Automation & Controls' },
    { id: 'Power Management', label: 'Power Management' },
    { id: 'Process Monitoring', label: 'Process Monitoring' },
    { id: 'Industrial Displays', label: 'Industrial Displays' }
];

export const productsData = [
    {
        id: '8-zone-fire-alarm',
        slug: '8-zone-fire-alarm',
        num: '01',
        title: '8 Zone Fire Alarm Control Panel',
        fullTitle: '8 Zone Fire Alarm Control Panel',
        category: 'Fire & Safety',
        standard: 'IS 2189 / NBC Compliant',
        shortDesc: 'Microprocessor 8-zone conventional fire alarm panel with zone isolation, battery backup, and dual sounder outputs.',
        image: '/images/products/8 Zone Fire Alarm Control Panel.jpeg',
        overview: 'Engineered in strict compliance with IS 2189 and National Building Code (NBC) standards, this 8 Zone Fire Alarm Control Panel delivers continuous zone-wise supervisory monitoring for industrial, commercial, and hazardous installations. Features independent zone isolation, open/short circuit fault detection, integrated battery charging, and dual sounder circuits.',
        features: [
            '8 Class-B initiating device zones supporting smoke, heat, and flame detectors',
            'Independent zone disable/isolate switch with visual LED status indication',
            'Integrated automatic battery charger with deep discharge & reverse polarity protection',
            'Potential-free relay contacts for BMS, SCADA, and fire damper activation',
            'Audio-visual alarm annunciation with distinct fire and fault tones'
        ],
        specifications: [
            { label: 'Mains Supply', value: '230V AC ±10%, 50 Hz' },
            { label: 'Standby Supply', value: '24V DC (Built-in Dual SMPS / Battery Backup)' },
            { label: 'Zone Capacity', value: 'Up to 25 Detectors & Unlimited MCPs per Zone' },
            { label: 'Standard Compliance', value: 'IS 2189 / NBC / CE Certified' },
            { label: 'Enclosure Rating', value: 'CRCA Sheet Steel, IP54 Powder Coated (RAL 7035)' }
        ],
        applications: [
            'Petrochemical & Chemical Storage Yards',
            'Commercial High-Rise Towers & Warehouses',
            'Pharmaceutical Cleanrooms & Production Units',
            'Substations, Server Rooms & Control Centers'
        ]
    },
    {
        id: 'ac-sequential-control',
        slug: 'ac-sequential-control',
        num: '02',
        title: 'AC Sequential Control Panel',
        fullTitle: 'AC Sequential Control Panel',
        category: 'Automation & Controls',
        standard: 'Microprocessor Dual Duty',
        shortDesc: 'Intelligent cyclic duty changeover & temperature failover controller for critical server room and control room HVAC units.',
        image: '/images/products/AC Sequential Control Panels.jpeg',
        overview: 'Designed for server rooms, telecom shelters, and industrial control rooms requiring uninterrupted cooling. This panel automatically alternates duty between primary and secondary air conditioning units based on programmable runtime hours, temperature thresholds, and compressor health feedback.',
        features: [
            'Programmable cyclic duty rotation (1 to 99 hours) between AC units',
            'Automatic secondary AC cut-in on high ambient temperature threshold',
            'Sub-second failover to standby AC upon compressor fault or power disruption',
            'Digital 7-segment display with real-time temperature sensing and runtime log',
            'Voltage supervisory relay protecting compressors from under/over-voltage conditions'
        ],
        specifications: [
            { label: 'Operating Voltage', value: '230V AC Single Phase / 415V AC Three Phase' },
            { label: 'Current Rating', value: 'Up to 32A per AC channel (Expandable)' },
            { label: 'Temperature Range', value: '0°C to 50°C with ±0.5°C Resolution' },
            { label: 'Relay Outputs', value: 'Heavy-Duty 30A Potential-Free Contacts' },
            { label: 'Enclosure', value: 'IP55 Weatherproof Wall Mount Powder Coated' }
        ],
        applications: [
            'Data Centers, Server Rooms & Telecom Hubs',
            'Substation SCADA & Relay Control Rooms',
            'Pharmaceutical Stability Chambers',
            'Offshore & Process Plant Automation Shelters'
        ]
    },
    {
        id: 'ats-control-panel',
        slug: 'ats-control-panel',
        num: '03',
        title: 'ATS Control Panel',
        fullTitle: 'ATS Control Panel',
        category: 'Power Management',
        standard: 'IEC 60947-6-1 / IP55',
        shortDesc: 'Sub-second auto changeover panel between Grid Mains and Standby DG sets with complete phase sensing and generator crank logic.',
        image: '/images/products/ATS Control Panel.jpeg',
        overview: 'Engineered for zero-downtime industrial facilities, the Vishal Enterprises ATS Panel ensures seamless automatic changeover between Grid Utility supply and standby Diesel Generator sets. Equipped with precision voltage, frequency, and phase sequence monitoring with programmable engine start/stop delay cycles.',
        features: [
            'True 4-pole motorized changeover switch / mechanically interlocked contactors',
            'Programmable mains failure detection, DG crank pulse, and warm-up delay timers',
            'Phase unbalance, under/over-voltage, and reverse phase protection',
            'Manual override key selector and emergency bypass mode',
            'Multifunction digital metering with RS485 Modbus RTU interface'
        ],
        specifications: [
            { label: 'Rated Voltage', value: '415V AC, 3-Phase 4-Wire, 50 Hz' },
            { label: 'Current Range', value: '63A to 2000A (Customized per Requirement)' },
            { label: 'Transfer Time', value: '< 100ms (Configurable Warm-up Delay)' },
            { label: 'Applicable Standard', value: 'IEC 60947-6-1 / IS 13947' },
            { label: 'Enclosure Rating', value: 'IP55 Free-standing CRCA Sheet Steel Enclosure' }
        ],
        applications: [
            'Hospitals, Critical Healthcare & Cleanrooms',
            'Heavy Manufacturing & Steel Rolling Mills',
            'Continuous Process Chemical Plants',
            'Commercial High-Rise Complexes & IT Infrastructure'
        ]
    },
    {
        id: 'ats-controller',
        slug: 'ats-controller',
        num: '04',
        title: 'ATS Controller',
        fullTitle: 'ATS Controller',
        category: 'Power Management',
        standard: 'Microprocessor Unit',
        shortDesc: 'Intelligent Automatic Transfer Switch controller unit with digital voltage sensing and generator auto-start signaling.',
        image: '/images/products/ATS Controller.jpeg',
        overview: 'Microcontroller-based ATS Controller unit designed for seamless monitoring of primary and secondary electrical sources. Automatically senses mains fail, under-voltage, phase loss, and frequency deviations to issue start signals to standby generators and operate motorized changeover switches.',
        features: [
            'Precision 3-phase true RMS voltage and frequency measurement',
            'Programmable engine start delay, warm-up timer, and cool-down timer',
            'Compact front-panel mounting design with LED status mimic',
            'Modbus communication for remote telemetry integration',
            'Manual test mode push buttons on front fascia'
        ],
        specifications: [
            { label: 'Auxiliary Supply', value: '8 to 35V DC Continuous' },
            { label: 'Voltage Sensing', value: '50V to 500V AC (Phase-to-Neutral / Phase-to-Phase)' },
            { label: 'Frequency Sensing', value: '40 Hz to 70 Hz' },
            { label: 'Output Relays', value: '10A / 250V AC Changeover Relays' },
            { label: 'Mounting', value: 'Standard Flush Panel Mount (96x96mm)' }
        ],
        applications: [
            'DG Set Control Panels',
            'AMF (Auto Mains Failure) Switchboards',
            'Critical Power Distribution Systems',
            'Commercial & Industrial Captive Power'
        ]
    },
    {
        id: 'advanced-fire-engine',
        slug: 'advanced-fire-engine',
        num: '05',
        title: 'Advanced Fire Engine Control Panel',
        fullTitle: 'Advanced Fire Engine Control Panel',
        category: 'Fire & Safety',
        standard: 'TAC / NBC / NFPA-20',
        shortDesc: 'TAC & NFPA-20 compliant diesel fire pump controller featuring automatic pressure drop detection and cyclic engine cranking.',
        image: '/images/products/Advanced Fire Engine Control Panel.jpeg',
        overview: 'A heavy-duty TAC and NFPA-20 compliant diesel fire engine controller built to initiate emergency water supply within seconds of pipeline pressure drops. Features dual battery banks with automatic sequential crank cycles, engine parameter monitoring (RPM, oil pressure, coolant temperature), and fail-to-start alarm annunciation.',
        features: [
            'Dual battery automatic cyclic cranking logic (3 crank / 3 rest sequence)',
            'Water line pressure transducer input & mechanical pressure switch interlock',
            'Comprehensive engine diagnostics: Low Lube Oil, High Water Temp, Over-speed',
            'Integrated dual-battery SMPS trickle charger with boost charging mode',
            'Audio-visual hooter with emergency manual crank push-button'
        ],
        specifications: [
            { label: 'Control Supply', value: '12V DC / 24V DC Diesel Auxiliary Circuit' },
            { label: 'Standard Compliance', value: 'TAC / NBC / NFPA-20 / IS 12469' },
            { label: 'Enclosure Material', value: '16 SWG CRCA Sheet, Powder Coated Fire Red (RAL 3000)' },
            { label: 'Ingress Rating', value: 'IP55 Dust & Splash Proof' },
            { label: 'Communication', value: 'RS485 Modbus for BMS / Fire SCADA Monitoring' }
        ],
        applications: [
            'Oil & Gas Refineries, POL Terminals and Depots',
            'Power Plants & Industrial Boiler Yards',
            'Large Industrial Manufacturing Campuses',
            'Airport Hangars and Sea Port Logistics Terminals'
        ]
    },
    {
        id: 'custom-circuit-plc',
        slug: 'custom-circuit-plc',
        num: '06',
        title: 'Circuit Designing and Programming',
        fullTitle: 'Circuit Designing and Programming',
        category: 'Automation & Controls',
        standard: 'Custom Embedded OEM',
        shortDesc: 'Turnkey customized embedded microcontrollers, PCB design and PLC control architectures built to custom machine OEM Single Line Diagrams.',
        image: '/images/products/Circuit Designing and Programming.jpeg',
        overview: 'Vishal Enterprises specializes in bespoke embedded circuit designing, specialized microprocessor firmware, and multi-brand PLC programming (Siemens, Delta, Mitsubishi, Schneider). We design purpose-built electronic boards and industrial control panels for proprietary industrial machinery and process lines.',
        features: [
            'Custom PCB layout, Gerber fabrication, and SMD component assembly',
            'Embedded firmware in C/C++ with robust watchdog error recovery',
            'Multi-vendor PLC programming, HMI screen designing & SCADA telemetry',
            'High-speed digital opto-isolated inputs and relay/triac driver outputs',
            'On-site simulation, functional debugging, and complete design documentation'
        ],
        specifications: [
            { label: 'Processor Architectures', value: 'ARM Cortex, STM32, PIC, ATmega, Industrial PLCs' },
            { label: 'I/O Capacities', value: 'Customizable (8 to 256+ Digital / Analog Channels)' },
            { label: 'Protocols Supported', value: 'Modbus RTU/TCP, CANbus, Profinet, MQTT, RS485' },
            { label: 'Noise Immunity', value: 'Industrial Grade EFT/Surge Protected up to 4kV' },
            { label: 'Custom Enclosures', value: 'DIN-Rail, Wall-Mount, or IP65 Die-Cast Aluminum' }
        ],
        applications: [
            'Special Purpose Machines (SPM) & Packaging Lines',
            'Industrial Automation & Robotic Cell Control',
            'Test Benches, Sensor Calibration & Data Loggers',
            'Custom Retrofit of Legacy Machine Control Systems'
        ]
    },
    {
        id: 'compact-fire-siren',
        slug: 'compact-fire-siren',
        num: '07',
        title: 'Compact Fire Siren Panel',
        fullTitle: 'Compact Fire Siren Panel',
        category: 'Fire & Safety',
        standard: 'Industrial Safety Norms',
        shortDesc: 'Wall-mounted solid-state fire siren driver with multi-tone alert tones, emergency punch button, and remote trigger integration.',
        image: '/images/products/Compact Fire Siren Panel.jpeg',
        overview: 'A space-efficient, high-output industrial audible alarm controller designed for rapid emergency notification across manufacturing shops and hazardous process bays. Equipped with multi-tone sound generators, high-decibel output drives, and direct integration with fire alarm panels.',
        features: [
            'Multi-tone alarm selection: Wailing (Fire), Continuous (Hazard), All-Clear (Disaster)',
            'Heavy-duty emergency mushroom lock-stop push button for immediate trigger',
            'External dry-contact trigger interface for central fire alarm panel hookup',
            'Built-in battery backup ensuring operation even during complete power blackout',
            'Robust CRCA enclosure with lockable front access door'
        ],
        specifications: [
            { label: 'Input Supply', value: '230V AC ±10%, 50 Hz with 12V/24V DC Battery Support' },
            { label: 'Sound Output', value: 'Up to 110 dB @ 1 Meter (Supports external motorized sirens)' },
            { label: 'Audible Range', value: '0.5 km to 2.5 km (Based on connected horn/siren model)' },
            { label: 'Protection', value: 'Short circuit and overload protected speaker drive' },
            { label: 'Enclosure Rating', value: 'IP54 Wall Mount Industrial Epoxy Coated' }
        ],
        applications: [
            'Chemical & Fertilizer Manufacturing Plants',
            'LPG Bottling & Petroleum Storage Bays',
            'Textile, Paper & Wood Processing Mills',
            'Institutional Campuses & Warehouse Logistics Parks'
        ]
    },
    {
        id: 'digital-wti-oti-controller',
        slug: 'digital-wti-oti-controller',
        num: '08',
        title: 'Digital WTI or OTI Controller with Simulation settings',
        fullTitle: 'Digital WTI or OTI Controller with Simulation settings',
        category: 'Process Monitoring',
        standard: 'CBIP / IEC 60076',
        shortDesc: 'Digital power transformer temperature indicator with integrated live test simulation settings for substation protection relays.',
        image: '/images/products/Digital WTI or OTI Controller with Simulation settings.jpeg',
        overview: 'A high-precision temperature monitoring and protection controller for high-voltage power and distribution transformers. Measures Winding Temperature (WTI) and Oil Temperature (OTI) using RTD Pt100 sensors and provides a built-in simulation knob allowing maintenance engineers to test Alarm and Trip contact sequences without heating the transformer.',
        features: [
            'Real-time dual channel digital temperature display with peak hold memory',
            'Unique on-board simulation potentiometer to test substation trip interlocks safely',
            'Independent 4-stage programmable relay contacts: Fan-1, Fan-2, Alarm, Trip',
            'Isolated 4-20mA retransmission output for Remote RTCC panel / SCADA',
            'Thermal replica CT input calculation for dynamic winding hotspot calculation'
        ],
        specifications: [
            { label: 'Sensor Input', value: 'Pt-100 RTD (3-Wire) + Transformer CT (Secondary 1A/5A)' },
            { label: 'Temperature Range', value: '0°C to 150°C (Accuracy ±1°C full scale)' },
            { label: 'Output Relays', value: '4x Potential Free Form-C Relays (5A @ 250V AC)' },
            { label: 'Analog Output', value: '4-20 mA Galvanically Isolated' },
            { label: 'Mounting Style', value: 'Flush Panel Mount (96x96mm / 144x144mm) or Wall Box' }
        ],
        applications: [
            'High-Voltage 66kV / 132kV / 220kV / 400kV Substation Transformers',
            'Captive Power Generation Plants & Wind Farm Step-Up Units',
            'Industrial Heavy Furnaces & Rectifier Transformers',
            'Substation Condition Monitoring & SCADA Systems'
        ]
    },
    {
        id: 'dyke-valve-position-panel',
        slug: 'dyke-valve-position-panel',
        num: '09',
        title: 'Dyke Valve Position Indication Panel',
        fullTitle: 'Dyke Valve Position Indication Panel',
        category: 'Hazardous Area',
        standard: 'OISD-118 / PESO',
        shortDesc: 'Hydrocarbon bulk storage dyke valve status monitor preventing accidental storm-water and oily effluent discharge.',
        image: '/images/products/Dyke Valve Position Indication Panel.jpeg',
        overview: 'Engineered specifically for petroleum bulk storage terminals in compliance with OISD-118 safety norms. This panel continuously monitors the Open/Closed status of containment dyke drain valves, preventing unauthorized discharge of oil into public drains and verifying that rainwater drainage valves are safely managed during storm events.',
        features: [
            'Multi-tank channel layout with bright dual-color LED valve position indications',
            'Proximity sensor and explosion-proof limit switch input interface',
            'Audio-visual alert if a dyke valve remains open beyond authorized time limits',
            'Interlock output for master oily water sewer (OWS) motorized gate valves',
            'RS485 Modbus communication with terminal control room DCS/SCADA'
        ],
        specifications: [
            { label: 'Channel Capacity', value: '4, 8, 12, or 16 Dyke Valve Channels per Panel' },
            { label: 'Sensor Compatibility', value: 'NAMUR Proximity Sensors / Potential-Free Limit Switches' },
            { label: 'Operating Voltage', value: '230V AC ±10%, 50 Hz / 24V DC Auxiliary' },
            { label: 'Standard Compliance', value: 'OISD-118 / PESO / OISD-117' },
            { label: 'Enclosure Rating', value: 'IP65 Weatherproof Powder Coated CRCA / SS304' }
        ],
        applications: [
            'Petroleum Oil Refineries & Bulk Storage Farm Dykes',
            'Chemical Tank Farms & Solvent Storage Bund Areas',
            'POL Terminals, Marketing Depots & LPG Installations',
            'Effluent Treatment Plants (ETP) and Industrial Waste Sewer Hubs'
        ]
    },
    {
        id: 'industrial-fire-siren',
        slug: 'industrial-fire-siren',
        num: '10',
        title: 'Fire Siren Control Panel',
        fullTitle: 'Fire Siren Control Panel',
        category: 'Fire & Safety',
        standard: 'Factory Safety Act',
        shortDesc: 'Heavy-duty fire & disaster siren controller with automatic cadence timers, manual test switch, and remote trigger contacts.',
        image: '/images/products/Fire Siren Control Panel.jpeg',
        overview: 'A plant-wide emergency warning console capable of driving high-power horizontal motorized sirens, electronic sirens, and visual rotating beacon towers. Features automated timer cycling for statutory plant shift hooters, emergency disaster warning cadences, and fire evacuation signals.',
        features: [
            'Automated 2-minute fire warning cadence timer (repetitive wail and pause)',
            'Manual pushbutton station, rotary selector and key-lock bypass switch',
            'Heavy-duty contactor drive supporting sirens up to 5 HP (3-Phase / Single Phase)',
            'Interlock input for plant emergency pushbuttons and central fire alarm system',
            'Phase failure and thermal overload relay protection for siren motors'
        ],
        specifications: [
            { label: 'Power Supply', value: '415V AC, 3-Phase / 230V AC, 1-Phase, 50 Hz' },
            { label: 'Motor Rating', value: 'Supports up to 5 HP Dual-Rotor Motorized Sirens' },
            { label: 'Timer Controller', value: 'Microprocessor Solid-State Cadence Timer' },
            { label: 'Safety Compliance', value: 'Factory Safety Act / Disaster Management Guidelines' },
            { label: 'Cabinet MOC', value: '14/16 SWG CRCA Sheet, Powder Coated Industrial Finish' }
        ],
        applications: [
            'Integrated Steel Plants, Mines & Heavy Engineering Works',
            'Chemical Refineries, Fertilizer Units & Port Docks',
            'Civil Defense & Municipal Disaster Alert Stations',
            'Industrial Estates and Manufacturing SEZ Complexes'
        ]
    },
    {
        id: 'flp-tt-earthing-relay',
        slug: 'flp-tt-earthing-relay',
        num: '11',
        title: 'Flameproof TT Earthing Relay',
        fullTitle: 'Flameproof TT Earthing Relay',
        category: 'Hazardous Area',
        standard: 'PESO Certified Ex-d IIB+H2',
        shortDesc: 'PESO-certified flameproof static earthing verification panel with pump interlock contacts for petroleum and LPG road tanker loading gantries.',
        image: '/images/products/Flameproof TT Earthing Relay.jpeg',
        overview: 'Engineered for hazardous petroleum and LPG tanker loading gantries, this PESO-certified flameproof unit eliminates static spark explosion risks. It verifies true metallic tanker earth connection through precision loop resistance sensing (< 10 Ohms) and provides interlocked relay contacts to ensure pumps and loading arms only operate when the tanker is safely grounded.',
        features: [
            'PESO (CCOE) certified flameproof enclosure for Gas Groups IIA, IIB, Zone 1 & 2',
            'Continuous ground loop resistance monitoring (< 10 Ω threshold)',
            'Heavy-duty brass/stainless steel earthing clamp with spiral retractable cable',
            'Interlock relay contact disables fuel transfer pump if clamp is disconnected',
            'Bright Red/Green flameproof LED indicators for Earth Safe / Unsafe status'
        ],
        specifications: [
            { label: 'Certification', value: 'PESO / BIS / CIMFR Certified Ex-d IIB+H2 T6 Gb' },
            { label: 'Operating Voltage', value: '230V AC ±10%, 50 Hz / 110V AC Option' },
            { label: 'Loop Resistance', value: 'Trip threshold ≤ 10 Ohms (Intrinsically Safe Output)' },
            { label: 'Enclosure Material', value: 'Die-Cast LM6 Aluminum Alloy Flameproof Casting' },
            { label: 'Relay Output', value: '2x Potential-Free NO/NC Contacts (5A @ 250V AC)' }
        ],
        applications: [
            'Petroleum Gantry Loading & Unloading Bays (TLF / TT)',
            'LPG & Propane Bulk Road Tanker Terminals',
            'Chemical & Solvent Bulk Transfer Stations',
            'Aviation Fuel (ATF) Hydrant Loading Stands'
        ]
    },
    {
        id: 'flp-gas-detection',
        slug: 'flp-gas-detection',
        num: '12',
        title: 'Gas Detection Controller (FLP)',
        fullTitle: 'Gas Detection Controller (FLP)',
        category: 'Hazardous Area',
        standard: 'PESO Ex-d IIB / Zone 1 & 2',
        shortDesc: 'Explosion-proof multi-channel gas detection panel supporting LEL, Hydrocarbon, H2S, and toxic gas sensor inputs with relay trips.',
        image: '/images/products/Gas Detection Controller (FLP).jpeg',
        overview: 'A rugged, PESO-certified explosion-proof gas detection hub designed for installation directly inside hazardous Zone 1 and Zone 2 environments. Continuously analyzes 4-20mA sensor signals from combustible (LEL), oxygen deficiency, and toxic gas transmitters, activating audio-visual alarms and emergency exhaust fans upon threshold breaches.',
        features: [
            'PESO / CCOE certified cast-aluminum flameproof enclosure with tempered glass window',
            'High-brightness OLED/LCD display showing gas type, PPM / %LEL concentration',
            'Dual-level programmable alarm setpoints (Warning 20% LEL / Alarm 40% LEL)',
            'Non-intrusive magnetic wand calibration without declassifying hazardous area',
            'Isolated 4-20mA analog and RS485 Modbus digital telemetry outputs'
        ],
        specifications: [
            { label: 'Enclosure Class', value: 'Ex-d IIB T6 Gb, IP66 Ingress Protection' },
            { label: 'Input Channels', value: '2 to 8 Universal 4-20mA Transmitter Inputs' },
            { label: 'Power Supply', value: '230V AC / 24V DC Field Power' },
            { label: 'Alarm Relays', value: 'DPDT Relays for Horn, Exhaust Fan, and Emergency Trip' },
            { label: 'Operating Temp', value: '-20°C to +60°C Hazardous Ambient' }
        ],
        applications: [
            'Offshore Oil Platforms & Onshore Drilling Rigs',
            'LPG / CNG Bottling Stations & Gas Compressor Houses',
            'Pharmaceutical Chemical Synthesis Plants',
            'Battery Energy Storage Systems (BESS) & Battery Rooms'
        ]
    },
    {
        id: 'jockey-pump-soft-starter',
        slug: 'jockey-pump-soft-starter',
        num: '13',
        title: 'Jockey Pump Soft Starter Control Panel',
        fullTitle: 'Jockey Pump Soft Starter Control Panel',
        category: 'Fire & Safety',
        standard: 'IS / IEC 60947-4-2',
        shortDesc: 'Solid-state soft starter panel with current limiting ramp control, preventing water hammer shock and pipeline pressure surges.',
        image: '/images/products/Jockey Pump Soft Starter Control Panel.jpeg',
        overview: 'Engineered to maintain constant pressure in industrial fire hydrant networks while eliminating mechanical water hammer shock and electrical peak inrush currents. Features thyristor-based smooth voltage ramp starting, bypass contactor integration, and digital pressure switch interlocks.',
        features: [
            'Smooth solid-state soft acceleration and deceleration eliminating water hammer',
            'Integrated internal/external bypass contactor for continuous energy-saving run',
            'Comprehensive motor protection: Electronic Overload, Phase Loss, Under-current (Dry Run)',
            'Auto/Manual selector switch with pressure switch cut-in / cut-out automation',
            'Digital display showing motor current, operating voltage, and trip diagnostics'
        ],
        specifications: [
            { label: 'Rated Power', value: '3.7 kW to 45 kW (5 HP to 60 HP)' },
            { label: 'Operating Voltage', value: '415V AC ±10%, 3-Phase, 50 Hz' },
            { label: 'Control Logic', value: 'Microprocessor Digital Soft Starter Unit' },
            { label: 'Protection Standard', value: 'IEC 60947-4-2 / IS 13947' },
            { label: 'Enclosure Rating', value: 'IP54 / IP55 CRCA Sheet Steel Enclosure' }
        ],
        applications: [
            'Industrial Fire Hydrant & Sprinkler Networks',
            'High-Rise Commercial Fire Pumping Stations',
            'Municipal Water Supply & Pressure Booster Plants',
            'Refinery & Petrochemical Tank Cooling Ring Systems'
        ]
    },
    {
        id: 'plc-fasd-starter',
        slug: 'plc-fasd-starter',
        num: '14',
        title: 'PLC based Fully Automatic Star Delta Starter (FASD)',
        fullTitle: 'PLC based Fully Automatic Star Delta Starter (FASD)',
        category: 'Automation & Controls',
        standard: 'IEC 60947-4-1 / IP54',
        shortDesc: 'PLC-driven fully automatic star-delta motor starter panel with millisecond star-to-delta transition and comprehensive electrical protection.',
        image: '/images/products/PLC based Fully Automatic Star Delta Starter (FASD).jpeg',
        overview: 'A premium industrial motor starter panel engineered with embedded PLC / microprocessor sequencing logic. Delivers smooth Star to Delta changeover with zero transition chatter, protecting heavy industrial 3-phase squirrel cage induction motors from severe starting torque spikes and grid voltage dips.',
        features: [
            'PLC-controlled transition timing with adjustable star dwell and open-circuit pause',
            'Heavy-duty AC3 rated contactors with mechanical and electrical interlocking',
            'Microprocessor motor protection: Overload, Single Phasing, Reverse Phase, Locked Rotor',
            'Digital multifunction meter displaying 3-Phase Current, Voltage, Frequency & PF',
            'Remote Start/Stop dry contacts and RS485 Modbus SCADA compatibility'
        ],
        specifications: [
            { label: 'Power Range', value: '11 kW to 160 kW (15 HP to 215 HP)' },
            { label: 'Rated Voltage', value: '415V AC ±10%, 3-Phase 50 Hz' },
            { label: 'Control Voltage', value: '230V AC / 110V AC / 24V DC' },
            { label: 'Contactor Class', value: 'AC-3 Duty Heavy Industrial Contactors' },
            { label: 'Panel Construction', value: 'IP54 Modular Floor-standing / Wall-mount CRCA Sheet' }
        ],
        applications: [
            'Industrial Air Compressors & Chiller Plants',
            'Water Intake Pumps & Sewage Lift Stations',
            'Cement Crushers, Ball Mills & Conveyors',
            'Chemical Agitators, Mixers & Heavy Extruders'
        ]
    },
    {
        id: 'servo-voltage-stabilizer',
        slug: 'servo-voltage-stabilizer',
        num: '15',
        title: 'Servo Stabilisers',
        fullTitle: 'Servo Stabilisers',
        category: 'Power Management',
        standard: 'IS 9815 / Heavy Duty',
        shortDesc: 'Precision 3-phase copper-wound servo voltage stabilizer with digital microprocessor control and rapid voltage correction.',
        image: '/images/products/Servo Stabilisers.jpeg',
        overview: 'Engineered for sensitive CNC machines, analytical laboratory instruments, and complete factory loads. This heavy-duty copper-wound servo stabilizer uses a high-speed microprocessor controller and precision servo motor drive to deliver ultra-stable 415V output (±1%) across wide grid fluctuations.',
        features: [
            '100% electrolytic grade copper wound variable autotransformer (Variac) and buck-boost',
            'Microcontroller-based fast response servo motor drive (correction speed > 35V/sec)',
            'Digital LCD display indicating individual Phase-to-Phase and Phase-to-Neutral voltages',
            'Comprehensive protection: Under-Voltage, Over-Voltage, Phase Loss, Surge Suppressor',
            'Built-in manual bypass switch allowing maintenance without powering down downstream loads'
        ],
        specifications: [
            { label: 'Capacity Range', value: '10 kVA to 500 kVA (Three Phase Unbalanced Type)' },
            { label: 'Input Voltage', value: '340V - 480V AC (Standard) / 280V - 500V AC (Wide Range)' },
            { label: 'Output Voltage', value: '415V AC ±1% (Adjustable 380V - 440V)' },
            { label: 'Efficiency', value: '> 98.5% at Full Load' },
            { label: 'Cooling Type', value: 'Air Cooled (up to 75 kVA) / Oil Cooled (Above 75 kVA)' }
        ],
        applications: [
            'CNC Machining Centers, Laser Cutters & Robotics',
            'Hospital Imaging Equipment (MRI, CT Scan, X-Ray)',
            'Textile Spinning Mills & Automated Printing Presses',
            'Entire Factory Main Incomer Voltage Conditioning'
        ]
    },
    {
        id: 'ups-acdb-panel',
        slug: 'ups-acdb-panel',
        num: '16',
        title: 'UPS ACDB Panel',
        fullTitle: 'UPS ACDB Panel',
        category: 'Power Management',
        standard: 'IEC 61439-1 / Class 1',
        shortDesc: 'High-integrity dual-bus AC distribution board with isolated neutral, surge suppressors, and individual outgoing branch metering.',
        image: '/images/products/UPS ACDB Panel.jpeg',
        overview: 'Engineered specifically for clean, uninterrupted power distribution from industrial UPS systems to critical control rooms, SCADA racks, DCS panels, and instrumentation bays. Features isolated neutral bars, Class-B+C transient surge protection devices (SPD), and high-reliability MCB/MCCB feeder branches.',
        features: [
            'Dual incoming bus arrangement with fast mechanical/electrical changeover',
            'Isolated Clean Earth and Instrument Ground busbars eliminating noise loops',
            'Multi-stage Class B+C Type 1+2 Surge Protection Devices (SPD) with health flag',
            'Individual branch circuit breaker status monitoring and digital power metering',
            'Form-2b / Form-3b internal compartmentalization with transparent acrylic shroud covers'
        ],
        specifications: [
            { label: 'Nominal Voltage', value: '415V AC, 3-Phase 4-Wire / 230V AC Single Phase' },
            { label: 'Current Rating', value: '63A to 800A Incomer Bus (Custom Outgoing Feeders)' },
            { label: 'Short Circuit Rating', value: '25 kA / 35 kA / 50 kA for 1 Second (IEC 61439-1)' },
            { label: 'Busbar Material', value: 'High Conductivity Electrolytic Tinned Copper' },
            { label: 'Enclosure Rating', value: 'IP54 / IP55 CRCA Sheet Steel, RAL 7035 Powder Coated' }
        ],
        applications: [
            'Industrial Process Control Rooms (DCS / SCADA Panels)',
            'Pharmaceutical Cleanrooms & Automation Instrumentation',
            'Power Plant Turbo-Generator Control Consoles',
            'Substation Communication & Telecontrol Equipment Racks'
        ]
    },
    {
        id: 'vcb-ab-switch-interlock',
        slug: 'vcb-ab-switch-interlock',
        num: '17',
        title: 'VCB - AB Switch Interlock Control Panel',
        fullTitle: 'VCB - AB Switch Interlock Control Panel',
        category: 'Power Management',
        standard: 'CEA Safety Regulations / IEC',
        shortDesc: 'Substation electrical safety interlock console ensuring Vacuum Circuit Breakers (VCB) are tripped before opening Air Break isolators.',
        image: '/images/products/VCB - AB Switch Interlock Control Panel.jpeg',
        overview: 'A critical substation safety console designed in accordance with Central Electricity Authority (CEA) safety guidelines. Prevents dangerous operational flashovers by enforcing a strict sequential interlock logic: ensuring that 11kV/33kV Vacuum Circuit Breakers (VCB) are opened before Air Break (AB) line isolator switches or Earth Switches can be operated.',
        features: [
            'Fail-safe electrical solenoid key exchange interlock (Castell / Fortress type)',
            'Breaker ON/OFF/TRIP position sensing with heavy-duty auxiliary switch contacts',
            'Audio-visual alarm and lockout strobe if illegal switching sequence is attempted',
            'Integrated DC control supply supervisory relay with battery low warning',
            'Mimic bus single-line diagram with illuminated status indicators on front fascia'
        ],
        specifications: [
            { label: 'Voltage Grade', value: '11kV / 22kV / 33kV / 66kV Substation Yards' },
            { label: 'Control Supply', value: '110V DC / 220V DC / 24V DC Substation Battery' },
            { label: 'Interlock Mechanism', value: 'Solenoid Release Key Interlock + Electrical Contact Interlocks' },
            { label: 'Safety Compliance', value: 'CEA Safety Regulations 2010 / IS 9921 / IEC 62271' },
            { label: 'Enclosure Rating', value: 'IP55 Outdoor Weatherproof CRCA / Stainless Steel' }
        ],
        applications: [
            '11kV / 33kV / 66kV Electrical Distribution Substations',
            'Solar & Wind Farm Incomer Pooling Substations',
            'Heavy Steel Rolling Mills & Furnace Incomer Yards',
            'Railway Traction Sub-Stations & Overhead Line Feeds'
        ]
    },
    {
        id: 'wireless-fire-jockey-pump-telemetry',
        slug: 'wireless-fire-jockey-pump-telemetry',
        num: '18',
        title: 'Wireless Fire Pump or Jockey Pump Status Control Panels',
        fullTitle: 'Wireless Fire Pump or Jockey Pump Status Control Panels',
        category: 'Fire & Safety',
        standard: 'WPC Approved RF Telemetry',
        shortDesc: 'Long-range industrial wireless telemetry system transmitting fire engine run, trip, water level, and pipeline pressure to central control rooms without trench cabling.',
        image: '/images/products/Wireless Fire Pump or Jockey Pump Status Control Panels 1.jpeg',
        overview: 'Eliminates expensive long-distance underground cable trenching between remote fire pump houses and central security/control rooms. Utilizes industrial license-free RF / LoRa telemetry to transmit real-time Main Electric, Diesel Engine, Jockey pump running status, pipeline pressure, and water sump levels over distances up to 5 kilometers.',
        features: [
            'Long-range industrial RF / LoRa wireless communication (up to 5 km line-of-sight)',
            'Transmits pump status: Run, Trip, Auto/Manual, Low Pressure, Diesel Engine Fault',
            'Master receiver panel with high-brightness LED annunciator windows and audio hooter',
            'Zero trenching or cabling required across active factory roads and chemical yards',
            'Built-in signal health watchdog with immediate alarm if wireless link is lost'
        ],
        specifications: [
            { label: 'Wireless Frequency', value: '865-867 MHz (License-Free WPC India Band) / 433 MHz' },
            { label: 'Transmission Range', value: 'Up to 5 km (Line of Sight) with High-Gain Yagi Antenna' },
            { label: 'I/O Channels', value: '8 to 16 Digital Inputs + 2 Analog 4-20mA Pressure Inputs' },
            { label: 'Power Supply', value: '230V AC ±10% with 24V DC Internal Battery Backup' },
            { label: 'Enclosure MOC', value: 'IP65 Weatherproof Polycarbonate / CRCA Powder Coated' }
        ],
        applications: [
            'Petrochemical Refineries & Petroleum Tank Farms',
            'Large Industrial Manufacturing Campuses & SEZs',
            'Airport Logistics Areas & Port Terminals',
            'Thermal Power Stations & Multi-Block Chemical Complexes'
        ]
    },
    {
        id: 'fire-engine-jockey',
        slug: 'fire-engine-jockey-pump-panels',
        num: '19',
        title: 'Fire Pump Duty Control Panel',
        fullTitle: 'Fire Pump Duty Control Panel',
        category: 'Fire & Safety',
        standard: 'OISD-117 / NFPA-20',
        shortDesc: 'Automatic duty rotation, fail-safe sequencing and soft-starter systems engineered in compliance with OISD-117 standards.',
        image: '/images/products/Fire Pump Duty Control Panel.jpeg',
        overview: 'Engineered specifically for mission-critical fire safety in petroleum refineries, chemical depots and industrial plants, our Fire Pump Duty Controllers (FPDC) and Jockey Pump panels guarantee instantaneous starting, automatic engine duty cycling, battery monitoring and fail-safe sequencing in strict compliance with OISD-117 and NFPA-20 guidelines.',
        features: [
            'Automatic multi-pump duty rotation and pressure-switch sequencing logic',
            'Soft starter and Star-Delta starting for reduced starting inrush currents',
            'Dual-battery automatic cranking and charger health monitoring for diesel engines',
            'OISD-117 compliant audio-visual hooter annunciation and emergency override',
            'Modbus communication for central fire control room / DCS monitoring',
            'Emergency manual starting bypass switchgear with mechanical interlock'
        ],
        specifications: [
            { label: 'Standard Compliance', value: 'OISD-117 / NFPA-20 / IS 12469' },
            { label: 'Operating Voltage', value: '415V AC 3-Phase (Electric) / 12V-24V DC (Diesel Engine)' },
            { label: 'Pump Sequencing', value: 'Jockey -> Main Electric -> Standby Diesel Auto Sequence' },
            { label: 'Enclosure', value: 'CRCA 14/16 SWG, Fire Red (RAL 3000), IP55' },
            { label: 'Monitoring', value: 'Pressure Transducer + Dual Pressure Switch Interlocks' }
        ],
        applications: [
            'Petroleum Refineries & POL Storage Depots',
            'LPG Bottling & Storage Installations',
            'Thermal & Hydro Power Plant Fire Networks',
            'Chemical & Petrochemical Industrial Complexes',
            'Commercial High-Rise Infrastructure & Airports'
        ]
    },
    {
        id: 'plc-process',
        slug: 'plc-panels-process-controls',
        num: '20',
        title: 'RO Utility Control Panel',
        fullTitle: 'RO Utility Control Panel',
        category: 'Automation & Controls',
        standard: 'IEC 61131-3 / IEEE 802.3',
        shortDesc: 'SCADA and PLC integration for automated continuous batching, pipeline sequencing and process flow control.',
        image: '/images/products/RO Utility Control Panel.jpeg',
        overview: 'Our Programmable Logic Controller (PLC) and Supervisory Control and Data Acquisition (SCADA) panels deliver precise process automation for continuous and batch operations. We provide turnkey programming, human-machine interface (HMI) screen development, telemetry networking and fail-safe automated shutdowns for high-consequence industrial facilities.',
        features: [
            'Multi-platform PLC integration (Siemens, Schneider, Allen-Bradley, Delta)',
            'High-resolution touchscreen HMI control with intuitive graphical synoptics',
            'Redundant power supply and fail-safe CPU hot-standby architectures',
            'Modbus TCP/IP, RS485 RTU, Profinet and Ethernet/IP telemetry',
            'Automated sequence batching, PID loop tuning and flow modulation',
            'Historical alarms logging, audit-trail data archiving and remote SCADA'
        ],
        specifications: [
            { label: 'PLC Brands Supported', value: 'Siemens S7, Schneider Modicon, Delta, Rockwell AB' },
            { label: 'HMI Display', value: '7" / 10" / 15" Multi-Touch Color TFT Screens' },
            { label: 'Communication Ports', value: 'Ethernet RJ45, RS485 Modbus, Profibus, CAN' },
            { label: 'Power Supply', value: '230V AC with Redundant 24V DC Industrial SMPS' },
            { label: 'Enclosure Rating', value: 'IP55 Free-Standing / Wall-Mount CRCA Enclosure' }
        ],
        applications: [
            'Oil & Gas Pipeline Pumping Terminals',
            'Water Filtration & Reverse Osmosis Plants',
            'Food & Pharmaceutical Continuous Batching',
            'Automated Blending and Decantation Facilities',
            'Bulk Material Conveying & Storage Silos'
        ]
    },
    {
        id: 'vfd-pmcc-ro',
        slug: 'vfd-fasd-pmcc-ro-utility-panels',
        num: '21',
        title: 'CNG panel and Thyristor controlled APFC PAN',
        fullTitle: 'CNG panel and Thyristor controlled APFC PAN',
        category: 'Power Management',
        standard: 'IEC 61439-1/2 / IS 8623',
        shortDesc: 'High-efficiency motor control centers, soft starters, variable frequency drives and reverse osmosis utility automation.',
        image: '/images/products/CNG panel and Thyristor controlled APFC PAN.jpeg',
        overview: 'Our Power and Motor Control Centers (PMCC), Variable Frequency Drive (VFD) panels and Fully Automatic Star-Delta (FASD) starters provide robust energy management and reliable motor protection for heavy industrial loads. From municipal water utilities to heavy machinery plants, our switchgear delivers smooth acceleration, harmonic mitigation and optimal power factor.',
        features: [
            'Precision Variable Frequency Drives (VFD) for energy optimization and speed control',
            'Fully Automatic Star-Delta (FASD) starters with thermal overload protection',
            'Form 3b / Form 4 compartmentalized PMCC and MCC drawout switchboards',
            'Active harmonic filtration and power factor correction integration',
            'Complete Reverse Osmosis (RO) high-pressure pump sequencing logic',
            'Comprehensive digital metering with voltage, current, power factor and kWh logging'
        ],
        specifications: [
            { label: 'Voltage Grade', value: '415V AC, 3-Phase 4-Wire, 50 Hz' },
            { label: 'Current Capacity', value: 'Up to 3200A Busbar Rating' },
            { label: 'Form of Separation', value: 'Form 2b / Form 3b / Form 4b' },
            { label: 'Drive Integration', value: 'VFDs from ABB, Danfoss, Schneider, Siemens' },
            { label: 'Enclosure Rating', value: 'IP54 / IP55 CRCA Sheet Steel' }
        ],
        applications: [
            'Industrial Effluent & RO Water Treatment Plants',
            'Heavy Manufacturing & Steel Rolling Mills',
            'Cement & Mining Conveyor Drives',
            'HVAC Central Chiller & Cooling Tower Plants',
            'Municipal Raw Water Pumping Schemes'
        ]
    },
    {
        id: 'siren-dyke',
        slug: 'siren-dyke-valve-position-panels',
        num: '22',
        title: 'Dyke Valve Position Annunciation Panel',
        fullTitle: 'Dyke Valve Position Annunciation Panel',
        category: 'Hazardous Area',
        standard: 'OISD-117 & 118 / PESO',
        shortDesc: 'Centralized emergency plant siren controllers and remote dyke valve position annunciation panels for petroleum tank farms.',
        image: '/images/products/Dyke Valve Position Annunciation Panel.jpeg',
        overview: 'Designed to safeguard hazardous storage environments, our Dyke Valve Position Monitoring and Emergency Siren Control Panels provide real-time status indication of containment valves in petroleum tank farms. Equipped with explosion-proof limit switches, audio-visual alarms and wireless telemetry, they prevent hazardous chemical containment breaches.',
        features: [
            'High-reliability dyke valve open/close status monitoring via proximity sensors',
            'Multi-tone emergency siren controllers with timed disaster signaling',
            'Remote wireless and RS485 communication to centralized control rooms',
            'Auxiliary contact outputs for automatic sump pump trip interlocks',
            'Weatherproof IP66 and Flameproof Zone 1 / 2 certified enclosures',
            'Battery backup operation during complete facility mains power failure'
        ],
        specifications: [
            { label: 'Channel Monitoring', value: '4 to 24 Dyke Valve Channels' },
            { label: 'Siren Drive Capacity', value: 'Supports Electronic Sirens & Motorized Sirens up to 5 HP' },
            { label: 'Safety Norms', value: 'OISD-117 / OISD-118 Compliant' },
            { label: 'Communication', value: 'RS485 Modbus / Wireless RF Telemetry' },
            { label: 'Power Supply', value: '230V AC with Dual SMPS / Battery Backup' }
        ],
        applications: [
            'Petroleum Dyke Tank Farms (IOCL, BPCL, HPCL)',
            'Chemical Bulk Storage Tank Terminals',
            'LPG / Propane Storage Sphere Areas',
            'Hazardous Spill Containment Basins',
            'Disaster Management Early Warning Networks'
        ]
    },
    {
        id: 'fire-alarm',
        slug: 'fire-alarm-detection-panels',
        num: '23',
        title: 'Fire Alarm Control Panel',
        fullTitle: 'Fire Alarm Control Panel',
        category: 'Fire & Safety',
        standard: 'IS 2189 / NFPA 72',
        shortDesc: 'Multi-zone addressable and conventional fire alarm detection panels with audio-visual hooter and beacon annunciation.',
        image: '/images/products/Fire Alarm Control Panel.jpeg',
        overview: 'Our multi-zone conventional and addressable fire alarm control panels provide rapid early detection of smoke, heat and flame hazards across complex industrial and commercial plants. Featuring microprocessor supervision, zone-wise isolation, repeater panel interfacing and automated fire extinguishing release logic.',
        features: [
            'Multi-zone supervision supporting conventional smoke and thermal heat detectors',
            'Addressable loop controllers with pinpoint geographical hazard localization',
            'Synchronized audio-visual hooters, strobes and beacon output channels',
            'Automatic fire suppression solenoid and deluge valve actuation interlocks',
            'Integrated dual-battery backup system with smart float charging',
            'BMS and SCADA integration via clean potential-free relay contacts'
        ],
        specifications: [
            { label: 'Capacity', value: '2, 4, 8, 16 to 32 Zones (Conventional & Addressable)' },
            { label: 'Input Power', value: '230V AC ±10%, 50 Hz with 24V DC Standby Battery' },
            { label: 'Applicable Standard', value: 'IS 2189 / NFPA 72 / NBC Compliant' },
            { label: 'Notification Outputs', value: 'Dual Sounder Circuits (24V DC, 1A each)' },
            { label: 'Cabinet MOC', value: 'CRCA Sheet Steel, Fire Red Epoxy Powder Coated' }
        ],
        applications: [
            'Substations & High-Voltage Switchgear Rooms',
            'Petrochemical Control Centers & Server Rooms',
            'Industrial Warehouses & Logistics Hubs',
            'Manufacturing Workshop Facilities',
            'Commercial Buildings & Corporate Complexes'
        ]
    },
    {
        id: 'flp-gas',
        slug: 'flp-gas-detection-simulation',
        num: '24',
        title: 'Gas Detection Controller with Bluetooth control',
        fullTitle: 'Gas Detection Controller with Bluetooth control',
        category: 'Hazardous Area',
        standard: 'IS/IEC 60079-0/1 / PESO',
        shortDesc: 'Certified explosion-proof gas concentration detectors and calibration simulation units engineered for Zone 1 and Zone 2 areas.',
        image: '/images/products/Gas Detection Controller with Bluetooth control.jpeg',
        overview: 'Vishal Enterprises engineers certified Flameproof (FLP) Gas Detection Systems and live calibration simulation test panels specifically tailored for petroleum depots, refineries and hazardous gas handling plants. Featuring Bluetooth-enabled concentration calibration, electrochemical sensors and instant high-LEL emergency trip triggers.',
        features: [
            'Bluetooth-enabled wireless concentration monitoring and threshold configuration',
            'High-accuracy catalytic and electrochemical sensors for Hydrocarbon & Toxic gases',
            'Live gas simulation functionality for routine safety drill validation without gas exposure',
            'PESO / CIMFR certified Ex-d Flameproof enclosures for Gas Group IIA, IIB & IIC',
            'Two-level LEL alarm trip relays for ventilation fan start and plant emergency shutdown',
            'Digital OLED/LCD real-time %LEL and PPM gas concentration display'
        ],
        specifications: [
            { label: 'Hazardous Zone', value: 'Zone 1 & Zone 2, Gas Groups IIA, IIB, IIC' },
            { label: 'Sensor Compatibility', value: 'Catalytic Bead, Electrochemical, Infrared' },
            { label: 'Display & Connectivity', value: 'High-Contrast OLED Display + Bluetooth BLE App' },
            { label: 'Output Relays', value: 'Warning (20% LEL), Alarm (40% LEL), Fault Relay' },
            { label: 'Enclosure Material', value: 'Die-Cast LM6 Flameproof Aluminum Alloy' }
        ],
        applications: [
            'LPG Bottling & Storage Carousels',
            'Crude Oil & Petroleum Refinery Units',
            'Natural Gas Regulating & Metering Stations',
            'Chemical Processing & Reactor Rooms',
            'Battery Charging & Hydrogen Generation Rooms'
        ]
    },
    {
        id: 'flp-earthing',
        slug: 'flp-earthing-relay-monitoring',
        num: '25',
        title: 'New product launched. FLP Earthing Relay interlocking with decantation  delivery pump.',
        fullTitle: 'New product launched. FLP Earthing Relay interlocking with decantation  delivery pump.',
        category: 'Hazardous Area',
        standard: 'IS/IEC 60079-11 / PESO',
        shortDesc: 'Static earthing interlock relays with decantation pump interlocking and tank truck discharge safety monitoring.',
        image: '/images/products/New product launched. FLP Earthing Relay interlocking with decantation  delivery pump..jpeg',
        overview: 'Our Flameproof Static Earthing Interlock Relay Units ensure safe decantation of flammable volatile liquids by constantly verifying ground continuity and electrostatic charge dissipation before allowing decantation pumps to start. Incorporating Tank Truck (TT) DP switch monitoring to eliminate static spark hazards during tanker loading and unloading.',
        features: [
            'Continuous static earth loop resistance monitoring (< 10 Ohms threshold)',
            'Positive interlock contact with tanker loading / decantation pumps',
            'Heavy-duty stainless steel grounding clamp with shielded retractable coiled cable',
            'Visual tri-color LED status indicators (Permissive Green / Interlocked Red)',
            'Explosion-proof aluminum cast alloy enclosure for Zone 1 hazardous environments',
            'Built-in surge protection and intrinsically safe monitoring circuitry'
        ],
        specifications: [
            { label: 'Loop Resistance Trip', value: '< 10 Ohms (Intrinsically Safe Ex-ia Circuit)' },
            { label: 'Hazardous Area Class', value: 'PESO Certified Ex-d IIB+H2 T6, Zone 1 & 2' },
            { label: 'Operating Voltage', value: '230V AC ±10%, 50 Hz' },
            { label: 'Interlock Relays', value: '2x Heavy-Duty 10A NO/NC Contacts for Pump Interlock' },
            { label: 'Cable & Clamp', value: '10-Meter Retractable High-Flex Spiral Cable + SS Clamp' }
        ],
        applications: [
            'Tank Truck (TT) Decantation Gantries at POL Depots',
            'LPG Tanker Unloading Terminals',
            'Solvent Loading and Chemical Transfer Bays',
            'Aviation Refueling Storage Depots',
            'Paint & Flammable Liquids Blending Plants'
        ]
    },
    {
        id: 'battery-changeover',
        slug: 'automatic-battery-changeover-panels',
        num: '26',
        title: 'Automatic Battery Changeover Panel',
        fullTitle: 'Automatic Battery Changeover Panel',
        category: 'Power Management',
        standard: 'ISO 9001:2015 / OISD-117',
        shortDesc: 'Dual-battery automatic changeover systems with graphical LCD status display and smart battery health diagnostics.',
        image: '/images/products/Automatic Battery Changeover Panel.jpeg',
        overview: 'Our Automatic Battery Changeover Panels (ABCP) guarantee 100% uninterrupted DC auxiliary power for critical fire engine starting circuits and protection relays. Incorporating intelligent dual-bank monitoring, auto-swap on bank degradation, precision boost/float charging and high-resolution graphical LCD status indicators.',
        features: [
            'Microcontroller-based intelligent automatic dual battery bank changeover',
            'Continuous battery impedance, cell voltage and discharge health tracking',
            'High-contrast Graphical LCD panel displaying real-time V, I and battery state',
            'Automatic switchover to Bank 2 if Bank 1 fails during engine cranking attempt',
            'Dual independent SMPS float-cum-boost battery charger modules',
            'Modbus RS485 telemetry for remote SCADA station battery diagnostics'
        ],
        specifications: [
            { label: 'DC Voltage Grades', value: '12V DC / 24V DC / 110V DC Dual Bank' },
            { label: 'Charger Topology', value: 'Dual SMPS Float & Boost with Auto Transition' },
            { label: 'Display Interface', value: '128x64 Graphical Backlit LCD' },
            { label: 'Transfer Time', value: '< 20 Milliseconds (Zero DC Dropout)' },
            { label: 'Communication', value: 'RS485 Modbus RTU Protocol' }
        ],
        applications: [
            'Diesel Engine Driven Fire Pump Sets',
            'High Voltage Substation DC Protection Circuits',
            'Telecom & Supervisory Microwave Repeater Sites',
            'Emergency Diesel Generator (DG) Starting Banks',
            'Critical Industrial UPS & Inverter Facilities'
        ]
    },
    {
        id: 'wti-oti',
        slug: 'wti-oti-safety-alarms-simulation',
        num: '27',
        title: 'Tank Level Annunciation Panel for Oil Industries',
        fullTitle: 'Tank Level Annunciation Panel for Oil Industries',
        category: 'Process Monitoring',
        standard: 'IS 3639 / IEC 60076-2',
        shortDesc: 'Winding and oil temperature indicator controllers with built-in live simulation functionality for power and distribution transformers.',
        image: '/images/products/Tank Level Annunciation Panel for Oil Industries.jpeg',
        overview: 'Our Tank Level and Temperature Annunciation controllers provide ultra-precise thermal and level monitoring with safety tripping for oil storage and high-voltage power transformers. Equipped with patent-inspired live test simulation dials allowing maintenance engineers to test cooler bank staging and alarm trip circuits without taking equipment offline.',
        features: [
            'High-precision dual-channel temperature and tank level digital tracking',
            'Built-in manual/automated live trip simulation circuit for routine health audits',
            'Multi-stage cooling fan and oil circulation pump control relay contacts',
            '4-20mA analog telemetry outputs for remote SCADA temperature recording',
            'Weatherproof powder-coated marshaling box enclosure with IP65 seal',
            'Peak temperature memory retention and resettable maximum indicator'
        ],
        specifications: [
            { label: 'Input Channels', value: 'Dual Pt100 RTD Sensors + 1A/5A CT Input' },
            { label: 'Range & Accuracy', value: '0°C to 150°C (±1°C Resolution)' },
            { label: 'Control Relays', value: 'Fan 1, Fan 2, High Temp Alarm, Trip Contact' },
            { label: 'Simulation Dial', value: 'Built-in 0-100% Calibrated Simulation Potentiometer' },
            { label: 'Enclosure Rating', value: 'IP65 Weatherproof Stainless Steel / CRCA Marshaling Box' }
        ],
        applications: [
            'Power & Distribution Transformers (11kV to 220kV Substations)',
            'State Electricity Transmission & Distribution Networks',
            'Industrial Captive Power Plant Transformers',
            'Renewable Solar & Wind Farm Sub-Stations',
            'Heavy Metal Smelting & Furnace Transformers'
        ]
    },
    {
        id: 'energy-annunciation',
        slug: 'energy-saving-annunciation-panels',
        num: '28',
        title: 'Graphical LCD Panel',
        fullTitle: 'Graphical LCD Panel',
        category: 'Power Management',
        standard: 'IS 13340 / IEC 60831',
        shortDesc: 'Automatic Power Factor Correction (APFC), thyristor switching and multi-window fault alarm annunciator systems.',
        image: '/images/products/Graphical LCD Panel.jpeg',
        overview: 'We manufacture advanced Graphical LCD Panels and Automatic Power Factor Correction (APFC) panels featuring ultra-fast thyristor switching alongside microprocessor-based multi-window fault alarm annunciators that provide crystal-clear visual and audible warnings for industrial process upsets.',
        features: [
            'High-resolution graphical LCD display interface with intuitive diagnostics',
            'Thyristor-switched capacitor banks for instantaneous power factor correction',
            'Eliminates utility low-power-factor penalties and reduces line harmonic losses',
            'Microprocessor multi-window LED alarm annunciator with customizable legends',
            'Selectable ISA sequence alarm functions (Auto-reset, Manual reset, First-out)',
            'Integrated digital power analyzer for real-time THD, kVAR and kWh monitoring'
        ],
        specifications: [
            { label: 'Display Type', value: 'Backlit Graphic LCD Screen' },
            { label: 'Capacitor Rating', value: '50 kVAR to 1000 kVAR Modular Steps' },
            { label: 'Switching Technology', value: 'Zero-Crossing Solid-State Thyristor Modules (< 20ms)' },
            { label: 'Sequence Logic', value: 'ISA-18.1 Standard Annunciator Sequences' },
            { label: 'Enclosure Class', value: 'IP54 / IP55 Free-Standing Compartmentalized Panel' }
        ],
        applications: [
            'Automotive & Heavy Fabrication Plants',
            'Plastic Injection Molding & Extrusion Facilities',
            'Textile & Paper Continuous Processing Mills',
            'Commercial IT Parks & Hospital Facilities',
            'Substation Control & Protection Desks'
        ]
    },
    {
        id: 'data-comm',
        slug: 'data-communication-wireless-modbus',
        num: '29',
        title: 'Advanced Fire Pump Control Panel',
        fullTitle: 'Advanced Fire Pump Control Panel',
        category: 'Automation & Controls',
        standard: 'Modbus Org / IEEE 802.15.4',
        shortDesc: 'Industrial IoT gateways, RS485 Modbus telemetry and wireless Bluetooth data loggers for plant-wide networking.',
        image: '/images/products/Advanced Fire Pump Control Panel.jpeg',
        overview: 'Vishal Enterprises provides comprehensive plant telemetry and industrial IoT communication infrastructure. We bridge field instrumentation with centralized control systems using ruggedized industrial Modbus RTU/TCP gateways, long-range wireless telemetry, fiber-optic converters and secure cloud monitoring.',
        features: [
            'RS485 Modbus RTU to Modbus TCP/Ethernet protocol converters',
            'Long-range wireless industrial RF and 4G/5G cellular IoT telemetry gateways',
            'Multi-drop instrument networking with galvanic optical isolation',
            'Bluetooth low-energy (BLE) field diagnostic transceivers for technician tablets',
            'Built-in cybersecurity firewall and encrypted protocol transmission',
            'Seamless interfacing with Honeywell, Emerson, Yokogawa and Siemens DCS'
        ],
        specifications: [
            { label: 'Serial Ports', value: 'Galvanically Isolated RS-485 / RS-232 Ports' },
            { label: 'Ethernet', value: 'Dual 10/100 Mbps RJ-45 with Auto-MDIX' },
            { label: 'Wireless Protocol', value: 'LoRaWAN / 865 MHz Industrial RF / BLE 5.0 / 4G LTE' },
            { label: 'Operating Voltage', value: '9-36V DC Wide Range Industrial Input' },
            { label: 'Mounting', value: 'DIN-Rail Mount / NEMA 4X Wall Enclosure' }
        ],
        applications: [
            'Cross-Country Oil & Gas Pipeline Valve Stations',
            'Water Distribution Remote Monitoring Networks',
            'Remote Solar & Wind Generation Substations',
            'Plant-Wide Environmental Emission Monitoring',
            'Multi-Building Industrial Campus Automation'
        ]
    },
    {
        id: 'display-panels',
        slug: 'p4-p6-safety-led-displays',
        num: '30',
        title: 'Accident Free Days Display',
        fullTitle: 'Accident Free Days Display',
        category: 'Industrial Displays',
        standard: 'IP65 Weatherproof / CE',
        shortDesc: 'Weatherproof high-brightness digital display boards for safety milestone tracking and real-time plant safety metrics.',
        image: '/images/products/Accident Free Days Display.jpeg',
        overview: 'We manufacture industrial-grade P4 and P6 full-color outdoor LED display systems engineered to promote safety awareness across industrial complexes. Displaying automatic counting of "Accident-Free Days", real-time weather metrics, production figures and live plant environmental announcements.',
        features: [
            'Ultra-bright outdoor P4 / P6 SMD LED modules with automatic ambient dimming',
            'Automated real-time calculation of accident-free man-hours and milestone days',
            'IP65 weatherproof, dust-proof and corrosion-resistant powder-coated housing',
            'Wireless Wi-Fi, Ethernet and USB programming for instant message updates',
            'RTC precision clock synchronization for exact date and time logging',
            'Multi-language graphical display supporting English, Hindi and regional scripts'
        ],
        specifications: [
            { label: 'Pixel Pitch', value: 'P4 (4mm Pitch) / P6 (6mm Pitch) High Resolution' },
            { label: 'Brightness', value: '> 6500 Nits (Crystal Clear Sunlight Readability)' },
            { label: 'Ingress Protection', value: 'IP65 Front & Rear Weatherproof Enclosure' },
            { label: 'Connectivity', value: 'Wi-Fi / Ethernet LAN / RS485 / Cloud CMS' },
            { label: 'Power Input', value: '230V AC ±10%, 50 Hz with Surge Protection' }
        ],
        applications: [
            'Industrial Main Entry Security Gates',
            'Manufacturing Workshop Shopfloors',
            'Petroleum Depot Safety Scoreboard Displays',
            'Highway & Toll Plaza Dynamic Message Signs',
            'Corporate Campus Information Message Boards'
        ]
    },
    {
        id: 'fire-pump-fail-safe-sequencing',
        slug: 'fire-pump-fail-safe-sequencing',
        num: '31',
        title: 'Fire Pump Fail Safe Sequencing Logic Panel',
        fullTitle: 'Fire Pump Fail Safe Sequencing Logic Panel',
        category: 'Fire & Safety',
        standard: 'OISD-117 Compliant',
        shortDesc: 'Fail-safe fire pump sequencing logic panel ensuring automatic multi-pump rotation, duty backup, and pressure maintenance.',
        image: '/images/products/Fire Pump Fail Safe Sequencing Logic Panel.jpeg',
        overview: 'Engineered for petroleum depots, refineries and high-hazard plants, this logic panel guarantees uninterrupted water pressure across fire hydrant lines with sequential fail-safe pump rotation.',
        features: [
            'Automatic cyclic duty changeover between main electric and diesel pumps',
            'Real-time pressure drop sensing and instantaneous pump start sequence',
            'Audio-visual fault annunciation and hooter alarm for emergency conditions',
            'Independent manual override control switches for all connected pumps'
        ],
        specifications: [
            { label: 'Control Supply', value: '230V AC / 24V DC Auxiliary Supply' },
            { label: 'Applicable Norms', value: 'OISD-117 / NFPA-20 / NBC' },
            { label: 'Cabinet MOC', value: '14/16 SWG CRCA Sheet, Powder Coated Fire Red' },
            { label: 'Ingress Rating', value: 'IP55 Weatherproof' }
        ],
        applications: [
            'Petroleum Storage Terminals & Depots',
            'Chemical & Petrochemical Processing Facilities',
            'Industrial Manufacturing Campuses'
        ]
    },
    {
        id: 'flameproof-fire-alarm-panel',
        slug: 'flameproof-fire-alarm-panel',
        num: '32',
        title: 'Flameproof Fire Alarm Control Panel',
        fullTitle: 'Flameproof Fire Alarm Control Panel',
        category: 'Hazardous Area',
        standard: 'PESO / Ex-d Certified',
        shortDesc: 'Explosion-proof certified fire alarm control panel for installation in Zone 1 and Zone 2 hazardous areas.',
        image: '/images/products/Flameproof Fire Alarm Control Panel.jpeg',
        overview: 'PESO certified explosion-proof fire alarm panel engineered for hazardous locations where combustible vapors or gases are present. Delivers reliable smoke and heat detection supervision directly inside hazardous plant zones.',
        features: [
            'Cast aluminum alloy flameproof enclosure for Gas Groups IIA, IIB, Zone 1 & 2',
            'Multi-zone supervision with intrinsically safe barrier options',
            'Integrated standby battery backup and charger circuit',
            'High-intensity external audio-visual flameproof beacon output'
        ],
        specifications: [
            { label: 'Hazardous Area Rating', value: 'Ex-d IIB T6 Gb, Zone 1 & 2' },
            { label: 'Operating Supply', value: '230V AC ±10%, 50 Hz' },
            { label: 'Zone Capacity', value: '2, 4, or 8 Hazardous Zones' },
            { label: 'Certification', value: 'PESO / CIMFR / BIS Certified' }
        ],
        applications: [
            'LPG Bottling Plants and Gas Filling Sheds',
            'Refinery Process Units & Chemical Storage Bays',
            'Offshore Rigs and Marine Terminals'
        ]
    },
    {
        id: 'flameproof-sop-narrator',
        slug: 'flameproof-sop-narrator',
        num: '33',
        title: 'Flameproof SOP Narrator Panel',
        fullTitle: 'Flameproof SOP Narrator Panel',
        category: 'Hazardous Area',
        standard: 'PESO Flameproof Certified',
        shortDesc: 'Explosion-proof audio instruction and Standard Operating Procedure (SOP) announcement panel for hazardous work gantries.',
        image: '/images/products/Flameproof SOP Narrator Panel.jpeg',
        overview: 'Designed for tanker loading gantries and chemical decantation areas to broadcast mandatory safety instructions, emergency SOPs, and step-by-step operating guidelines in hazardous Zone 1 and Zone 2 areas.',
        features: [
            'Clear audible voice narration of critical Standard Operating Procedures',
            'Multi-lingual voice support (English, Hindi, Regional languages)',
            'Triggered automatically upon vehicle arrival or push button command',
            'Heavy-duty flameproof enclosure with high-decibel horn speaker'
        ],
        specifications: [
            { label: 'Enclosure Rating', value: 'Ex-d IIB+H2 T6, IP65' },
            { label: 'Audio Output', value: 'Up to 110 dB Clear Industrial Audio' },
            { label: 'Input Power', value: '230V AC / 24V DC' },
            { label: 'Certification', value: 'PESO Certified for Hazardous Areas' }
        ],
        applications: [
            'Petroleum Truck Loading Gantries (TLF)',
            'LPG & Chemical Decantation Bays',
            'Hazardous Industrial Processing Bays'
        ]
    },
    {
        id: 'flameproof-dyke-valve-annunciation',
        slug: 'flameproof-dyke-valve-annunciation',
        num: '34',
        title: 'Flameproof Dyke Valve Position Annunciation Panel',
        fullTitle: 'Flameproof Dyke Valve Position Annunciation Panel',
        category: 'Hazardous Area',
        standard: 'OISD-118 / PESO Certified',
        shortDesc: 'Explosion-proof dyke valve status monitor ensuring containment valve safety directly inside hazardous tank farm dykes.',
        image: '/images/products/Flameproof Dyke Valve Position Annunciation Panel.jpeg',
        overview: 'Certified flameproof dyke valve position panel designed for field installation directly within petroleum tank bund walls and hazardous dyke zones. Provides clear open/closed valve status indication and pump trip interlocks.',
        features: [
            'Flameproof cast alloy enclosure for direct field installation in Zone 1/2',
            'Proximity sensor inputs for open and closed valve position feedback',
            'Bright visual LED indicators and audio alarm on valve unauthorized open',
            'Interlock contact to stop sump pumps during open dyke valve condition'
        ],
        specifications: [
            { label: 'Explosion Protection', value: 'Ex-d IIB T6 Gb, Zone 1 & 2' },
            { label: 'Sensor Inputs', value: 'NAMUR Proximity Sensors / FLP Limit Switches' },
            { label: 'Operating Voltage', value: '230V AC / 24V DC' },
            { label: 'Standard Compliance', value: 'OISD-118 / PESO Guidelines' }
        ],
        applications: [
            'Petroleum Bulk Storage Farm Dykes (IOCL, BPCL, HPCL)',
            'Chemical Tank Bund Walls & Spill Containment Basins',
            'LPG Storage Sphere Bund Areas'
        ]
    },
    {
        id: 'sop-narrator',
        slug: 'sop-narrator',
        num: '35',
        title: 'SOP Narrator',
        fullTitle: 'SOP Narrator',
        category: 'Automation & Controls',
        standard: 'Industrial Safety Standard',
        shortDesc: 'Automated audio Standard Operating Procedure (SOP) broadcasting unit for manufacturing floors and maintenance workshops.',
        image: '/images/products/SOP Narrator.jpeg',
        overview: 'Industrial automated audio narration unit providing step-by-step operating guidelines, safety reminders, and procedural announcements across factory workstations, maintenance bays, and machinery cells.',
        features: [
            'High-clarity industrial voice speaker with volume control',
            'Pre-recordable multi-track MP3 audio messages via SD card or USB',
            'Opto-isolated sensor triggers and manual push-button activation',
            'Weatherproof wall-mount enclosure with integrated power supply'
        ],
        specifications: [
            { label: 'Supply Voltage', value: '230V AC ±10%, 50 Hz / 12V DC' },
            { label: 'Audio Power', value: '15W / 30W High-Efficiency Amplifier' },
            { label: 'Storage Media', value: 'MicroSD Card (Up to 32GB)' },
            { label: 'Enclosure Rating', value: 'IP54 Wall Mount CRCA Enclosure' }
        ],
        applications: [
            'Factory Assembly Lines & Packaging Stations',
            'Substation Operation Desks & Control Rooms',
            'Safety Training Bays and Security Entry Gates'
        ]
    },
    {
        id: 'gas-detection-controller',
        slug: 'gas-detection-controller',
        num: '36',
        title: 'Gas Detection Controller',
        fullTitle: 'Gas Detection Controller',
        category: 'Hazardous Area',
        standard: 'IS/IEC 60079-0/1 / PESO',
        shortDesc: 'Multi-channel industrial gas detection controller monitoring combustible, toxic, and oxygen deficiency gas levels.',
        image: '/images/products/Gas Detection Controller.jpeg',
        overview: 'Multi-channel industrial gas detection controller designed to interface with field gas transmitters across chemical plants, gas bottling stations, and boiler rooms. Provides real-time concentration display, dual-level alarms, and automatic exhaust fan actuation.',
        features: [
            'Multi-channel monitoring supporting 4-20mA gas detector inputs',
            'Bright digital concentration readout per channel in %LEL or PPM',
            'Two-level alarm trip relays for ventilation fan control and emergency shutdown',
            'Built-in audio buzzer with alarm acknowledge and reset controls'
        ],
        specifications: [
            { label: 'Input Channels', value: '4 / 8 / 16 Channels (4-20mA Analog Input)' },
            { label: 'Operating Voltage', value: '230V AC ±10%, 50 Hz with 24V DC Auxiliary' },
            { label: 'Relay Outputs', value: 'Potential-Free DPDT Relays (5A @ 250V AC)' },
            { label: 'Enclosure Rating', value: 'IP55 Wall-Mount Industrial Enclosure' }
        ],
        applications: [
            'Gas Cylinder Storage & Decanting Areas',
            'Chemical Processing & Reaction Units',
            'Battery Charging Rooms and Furnace Areas'
        ]
    }
];

export const getProductBySlug = (slug) => {
    if (!slug) return null;
    return productsData.find(p => p.slug === slug || p.id === slug) || null;
};

export const getProductById = (id) => {
    if (!id) return null;
    return productsData.find(p => p.id === id || p.slug === id) || null;
};
