export const productCategories = [
    { id: 'all', label: 'All Products' },
    { id: 'Fire & Safety', label: 'Fire & Safety' },
    { id: 'Hazardous Area', label: 'Hazardous Area' },
    { id: 'Automation & Controls', label: 'Automation & Controls' },
    { id: 'Power Management', label: 'Power Management' },
    { id: 'Process Monitoring', label: 'Process Monitoring' }
];

export const productsData = [
    {
        id: 'fire-pump-adv',
        slug: 'fire-pump-adv',
        num: '01',
        title: 'Advanced Fire Pump Duty Controller',
        fullTitle: 'Advanced Fire Pump Duty & Sequencing Controller Panel',
        category: 'Fire & Safety',
        standard: 'TAC / NBC Approved',
        shortDesc: 'Intelligent duty rotation, main electric, standby diesel, and jockey pump sequencing controller with Modbus SCADA communication.',
        image: '/images/products/Advanced Fire Pump Control Panel.jpeg',
        overview: 'Engineered in strict accordance with TAC and National Building Code (NBC) guidelines, this intelligent controller automates primary electric, standby diesel engine, and jockey fire hydrant pump sequences. Features dual battery automatic starting, pressure drop sensing, and sub-second failover.',
        features: [
            'Automated main electric, standby diesel, and jockey pump sequencing',
            'Pressure sensor transducer & dual pressure switch interlocks',
            'Dual battery charger with automatic engine cranking cycle logic',
            'RS-485 Modbus RTU telemetry for central BMS & SCADA integration',
            'Independent manual override test modes and audio-visual fault annunciator'
        ],
        specifications: [
            { label: 'Operating Voltage', value: '415V AC ±10%, 50 Hz / 24V DC auxiliary' },
            { label: 'Standard Compliance', value: 'TAC / NBC / NFPA-20 Aligned' },
            { label: 'Ingress Protection', value: 'IP55 / IP65 Powder-Coated CRCA Sheet' },
            { label: 'Control Architecture', value: 'Microprocessor / PLC Embedded Logic' },
            { label: 'Starting Method', value: 'Direct-on-Line (DOL) / Star-Delta / Soft-Starter' }
        ],
        applications: [
            'Petrochemical Refineries & POL Terminals',
            'High-Rise Commercial Complexes & IT Parks',
            'Heavy Manufacturing & Steel Plants',
            'Thermal & Hydro Power Generating Stations'
        ]
    },
    {
        id: 'gas-detection-bt',
        slug: 'gas-detection-bt',
        num: '02',
        title: 'Gas Detection Controller with Bluetooth',
        fullTitle: 'Smart Multi-Channel Gas Detection Hub with Bluetooth Calibration',
        category: 'Hazardous Area',
        standard: 'PESO Certified',
        shortDesc: 'Multi-channel toxic & combustible gas concentration monitoring hub with wireless Bluetooth mobile calibration and 4-20mA telemetry.',
        image: '/images/products/Gas Detection Controller with Bluetooth control.jpeg',
        overview: 'A state-of-the-art gas detection and alarm controller with integrated Bluetooth connectivity, allowing field technicians to perform wireless zero/span calibration and diagnostic testing without opening the flameproof housing in explosive gas atmospheres.',
        features: [
            'Wireless Bluetooth BLE communication for hazardous-area field calibration',
            'Multi-channel monitoring supporting LEL, Hydrocarbon, H2S, and Toxic gas heads',
            'Tri-color graphical display showing real-time PPM / %LEL gas concentration',
            'Programmable dual-level Warning and Alarm relay contact outputs',
            'Fail-safe internal watchdog circuit with continuous sensor health diagnostics'
        ],
        specifications: [
            { label: 'Input Signals', value: '4-20 mA Analog Transmitters / RS-485 Modbus' },
            { label: 'Certifications', value: 'PESO / CCOE Certified Ex-d IIB+H2 T6 Gb' },
            { label: 'Wireless Range', value: 'Up to 15 Meters Bluetooth BLE Link' },
            { label: 'Enclosure Rating', value: 'Cast Aluminum LM6 Flameproof Enclosure' },
            { label: 'Alarm Relay Output', value: '4x SPDT Relays Rated 5A @ 250V AC' }
        ],
        applications: [
            'LPG / CNG Bottling & Distribution Stations',
            'Chemical Processing & Fertilizer Plants',
            'Pharmaceutical Bulk Drug Synthesis Blocks',
            'Offshore Oil Rigs & FPSO Vessels'
        ]
    },
    {
        id: 'flp-dyke-valve',
        slug: 'flp-dyke-valve',
        num: '03',
        title: 'Flameproof Dyke Valve Control Panel',
        fullTitle: 'Explosion-Proof Petroleum Dyke Valve Position & Control Console',
        category: 'Hazardous Area',
        standard: 'Zone 1 Ex-d IIB',
        shortDesc: 'Explosion-proof remote valve position actuator console with optical limit sensor telemetry engineered for petroleum dyke containment walls.',
        image: '/images/products/Flameproof Dyke Valve Position Control Pane.jpeg',
        overview: 'Specifically engineered for containment dyke walls of petroleum hydrocarbon bulk storage farms. This console prevents accidental discharge of rainwater/oil mixtures by ensuring fail-safe interlocked motorized valve open/close actuation with continuous position confirmation.',
        features: [
            'Dual limit switch feedback with visual open/close LED confirmation',
            'Interlocked storm-water and oily effluent drain control logic',
            'Local explosion-proof push buttons plus remote SCADA emergency shutoff',
            'Cast aluminum alloy LM6 construction with weatherproof neoprene seals',
            'Fail-safe close actuation on power loss or high oil level detector trip'
        ],
        specifications: [
            { label: 'Hazardous Classification', value: 'Gas Group IIA, IIB, Zone 1 & 2' },
            { label: 'Control Supply', value: '230V AC / 110V AC / 24V DC' },
            { label: 'Operating Temperature', value: '-20°C to +55°C Ambient' },
            { label: 'Interlock Capability', value: 'Up to 8 Dyke Valves Interlocked' },
            { label: 'Enclosure MOC', value: 'Die-cast LM6 Aluminum Powder Coated' }
        ],
        applications: [
            'POL Tank Farms & Petroleum Depots (IOCL, HPCL, BPCL)',
            'Crude Oil Tanker Unloading Jetties',
            'Chemical Storage Dyke Enclosures',
            'Industrial Effluent Treatment Facilities'
        ]
    },
    {
        id: 'sop-narrator',
        slug: 'sop-narrator',
        num: '04',
        title: 'SOP Narrator Audio System',
        fullTitle: 'Automated Standard Operating Procedure (SOP) Voice Broadcast System',
        category: 'Fire & Safety',
        standard: 'OISD-117 Compliant',
        shortDesc: 'Automated multilingual voice guidance and standard operating procedure broadcaster with LCD status display and emergency override.',
        image: '/images/products/SOP Narrator.jpeg',
        overview: 'A digital audio safety broadcaster designed to enforce standard operating safety procedures (SOPs) at hazardous plant locations like tanker loading gantries, chemical dosing rooms, and substation yards through crystal-clear multilingual automated announcements.',
        features: [
            'Crystal-clear automated multilingual audio announcements (English, Hindi, Regional)',
            'Triggered via optical beam, tanker earth clamp, or plant safety interlocks',
            'High-gain integrated public address amplifier supporting external horn speakers',
            'Micro-SD card slot for custom audio message recording and scheduling',
            'Emergency override beacon light and manual push-to-announce button'
        ],
        specifications: [
            { label: 'Audio Output', value: '30W / 60W RMS Class-D Industrial Amplifier' },
            { label: 'Message Storage', value: 'Up to 99 Pre-recorded WAV/MP3 Files' },
            { label: 'Trigger Inputs', value: '8x Potential-free Opto-isolated Contact Inputs' },
            { label: 'Operating Power', value: '230V AC, 50 Hz with internal battery backup' },
            { label: 'Display Panel', value: 'Backlit 16x2 Alphanumeric LCD Status Display' }
        ],
        applications: [
            'Petroleum & LPG Tanker Loading Gantries',
            'Chemical Tanker Decantation Bays',
            'Factory Main Gates & Security Induction Rooms',
            'High Voltage Substation Switchyards'
        ]
    },
    {
        id: 'tank-level',
        slug: 'tank-level',
        num: '05',
        title: 'Tank Level Annunciation Panel',
        fullTitle: 'Multi-Channel Tank Level Annunciation & Overfill Protection Panel',
        category: 'Process Monitoring',
        standard: 'ISO 9001:2015',
        shortDesc: 'Multi-channel ultrasonic and hydrostatic tank level alarm annunciator with graphical LCD interface for bulk oil storage facilities.',
        image: '/images/products/Tank Level Annunciation Panel for Oil Industries.jpeg',
        overview: 'A comprehensive multi-tank level monitoring and overfill prevention panel. Integrates with hydrostatic, ultrasonic, and radar level transmitters to display volumetric data, sounding dual-stage high/low alarms to prevent catastrophic environmental spillages.',
        features: [
            'Simultaneous level monitoring for up to 16 bulk storage tanks',
            'Dual-level alarm annunciation with audible hooter and visual flashing windows',
            'Automated pump cut-off trip signals on high-high level condition',
            'Volume and temperature compensation calculation engine',
            'Modbus telemetry exportable directly to terminal automation systems'
        ],
        specifications: [
            { label: 'Sensor Inputs', value: '4-20mA, HART, Modbus RTU RS485' },
            { label: 'Annunciator Facia', value: 'High-brightness LED Windows with Test/Mute' },
            { label: 'Accuracy', value: '±0.1% Full Scale Resolution' },
            { label: 'Power Supply', value: 'Dual Redundant 110-230V AC SMPS' },
            { label: 'Relay Contacts', value: '16x Configurable Trip Relays (5A rating)' }
        ],
        applications: [
            'Bulk Liquid Fuel Depots & Refineries',
            'Edible Oil Storage & Processing Plants',
            'Solvent & Chemical Intermediate Storage',
            'Municipal Water Supply & Reservoir Towers'
        ]
    },
    {
        id: 'graphical-lcd',
        slug: 'graphical-lcd',
        num: '06',
        title: 'Graphical LCD Dual Battery Controller',
        fullTitle: 'Microcontroller Dual Battery Charger & Changeover Panel with Graphical LCD',
        category: 'Power Management',
        standard: 'Class-1 Certified',
        shortDesc: 'Automatic battery changeover panel featuring real-time graphical voltage monitoring, float/boost charging, and automated health diagnostics.',
        image: '/images/products/Graphical LCD Panel.jpeg',
        overview: 'Engineered for uninterrupted DC auxiliary control power in electrical substations and industrial generating sets. Features a high-resolution graphical display showing charge/discharge curves, automated float/boost changeover, and internal battery resistance diagnostics.',
        features: [
            'Real-time graphical voltage & current waveform analysis on backlit LCD',
            'Automatic seamless changeover between Bank-1 and Bank-2 battery sets',
            'Float, Boost, and Equalizing charging modes with temperature compensation',
            'Battery deep-discharge cutoff and reverse polarity electronic protection',
            'Comprehensive fault log recorder with date and time-stamped events'
        ],
        specifications: [
            { label: 'DC Output Voltage', value: '24V DC / 48V DC / 110V DC / 220V DC' },
            { label: 'Current Capacity', value: '10A to 100A Continual Rating' },
            { label: 'Efficiency', value: '> 90% at Full Load' },
            { label: 'Display Interface', value: '128x64 Blue Backlit Graphical LCD' },
            { label: 'Enclosure Protection', value: 'IP52 / IP54 Sheet Steel Powder Coated' }
        ],
        applications: [
            '66kV, 132kV, 220kV Electrical Utility Substations',
            'Critical Data Centers & UPS Battery Rooms',
            'Industrial Captive Power Generating Plants',
            'Telecom Towers & Remote Repeater Stations'
        ]
    },
    {
        id: 'flp-sop-narrator',
        slug: 'flp-sop-narrator',
        num: '07',
        title: 'Flameproof SOP Narrator Panel',
        fullTitle: 'Zone 1 Flameproof Multilingual SOP Voice Annunciation System',
        category: 'Hazardous Area',
        standard: 'Zone 1 Flameproof',
        shortDesc: 'Certified explosion-proof cast-aluminum voice narration system for mandatory safety protocol compliance in Zone 1 classified areas.',
        image: '/images/products/Flameproof SOP Narrator Panel.jpeg',
        overview: 'Housed in a rugged PESO-certified flameproof cast aluminum LM6 enclosure, this unit brings digital standard operating voice guidance directly into Zone 1 & 2 hazardous areas, ensuring field operators follow mandatory grounding and PPE protocols before operating valves or loading tankers.',
        features: [
            'Flameproof Zone 1, Group IIA, IIB explosion-proof cast aluminum enclosure',
            'Integrated high-decibel flameproof horn speaker driver',
            'Infrared non-intrusive sensor or explosion-proof push-button trigger',
            'Internal solid-state flash audio memory with zero moving parts',
            'High-intensity LED visual strobe integrated into the flameproof glass dome'
        ],
        specifications: [
            { label: 'Explosion Protection', value: 'Ex-d IIB T6 Gb as per IS/IEC 60079' },
            { label: 'Sound Pressure Level', value: '105 dB @ 1 Meter Distance' },
            { label: 'Cable Entries', value: '4x M20 / 3/4" NPT Flameproof Double Compression' },
            { label: 'Operating Voltage', value: '230V AC / 24V DC Low Voltage' },
            { label: 'Ingress Protection', value: 'IP66 Weatherproof and Dust-Tight' }
        ],
        applications: [
            'LPG Bottling Carousel Platforms',
            'Petroleum Truck Loading Bays',
            'Hydrogen Gas Compression Skid Areas',
            'Offshore Hydrocarbon Production Platforms'
        ]
    },
    {
        id: 'accident-free-days',
        slug: 'accident-free-days',
        num: '08',
        title: 'Digital Accident-Free Days Display',
        fullTitle: 'Industrial Digital LED Milestone & Accident-Free Days Safety Display',
        category: 'Process Monitoring',
        standard: 'Industrial Safety',
        shortDesc: 'High-visibility industrial LED safety counter display board for plant-wide tracking of milestone working hours and injury-free records.',
        image: '/images/products/Accident Free Days Display.jpeg',
        overview: 'Promotes corporate safety culture across manufacturing campuses, petroleum depots, and refineries. Automatically increments safe working days at midnight, displaying past record days, current accident-free days, and lost-time injury statistics.',
        features: [
            'Super-bright 4-inch / 6-inch red/green seven-segment LED display visible up to 50m',
            'Built-in real-time clock (RTC) automatically advances day count at 00:00 hrs',
            'Wireless IR remote control and Wi-Fi/Bluetooth app for secure parameter updates',
            'Battery-backed memory retains counts during plant electrical shutdowns',
            'Weatherproof industrial aluminum cabinet engineered for outdoor installation'
        ],
        specifications: [
            { label: 'Digit Height', value: '4" (100mm) / 6" (150mm) High-Intensity LEDs' },
            { label: 'Viewing Distance', value: 'Up to 60 Meters under direct sunlight' },
            { label: 'Clock Accuracy', value: '±1 Minute per Year (TCXO Crystal RTC)' },
            { label: 'Cabinet MOC', value: 'Heavy Duty Anodized Aluminum with Polycarbonate Window' },
            { label: 'Power Input', value: '110V - 260V AC Universal Switched Power Supply' }
        ],
        applications: [
            'Factory Main Gate Entry Promenades',
            'Steel Mills, Cement Factories & Heavy Foundries',
            'Automotive Manufacturing Assembly Lines',
            'Oil & Gas Terminal Safety Verification'
        ]
    },
    {
        id: 'ac-sequential',
        slug: 'ac-sequential',
        num: '09',
        title: 'Multi-Compressor AC Sequential Panel',
        fullTitle: 'Microprocessor Multi-Compressor AC Runtime Sequencer & Failover Panel',
        category: 'Automation & Controls',
        standard: 'IEC 61439',
        shortDesc: 'Microcontroller-based even-wear runtime balancing and emergency failover automation panel for server rooms and critical substation environments.',
        image: '/images/products/AC Sequential Control Panel.jpeg',
        overview: 'Designed for mission-critical cooling environments like server rooms, SCADA control centers, and electrical substation battery rooms. Manages multiple air conditioning compressor units to ensure uniform mechanical wear, automatic emergency standby unit cut-in on high temperature, and cyclic duty rotation.',
        features: [
            'Equalized runtime balancing across 2, 3, or 4 independent AC units',
            'Dual digital temperature sensors with programmable cut-in thresholds',
            'Automatic standby unit engagement on high temperature or compressor trip',
            'Phase sequence and single-phasing protection for compressor motors',
            'BMS telemetry output via RS-485 for remote temperature monitoring'
        ],
        specifications: [
            { label: 'Capacity', value: 'Controls up to 4x 5.5kW / 11kW AC Compressors' },
            { label: 'Temperature Range', value: '0°C to 50°C with 0.1°C Resolution' },
            { label: 'Duty Cycle Modes', value: 'Timer-based (1-24 Hrs) / Temperature Demand' },
            { label: 'Enclosure Rating', value: 'IP54 Wall-mount CRCA Sheet Steel' },
            { label: 'Protections', value: 'Under/Over Voltage, Phase Reversal, Compressor Overload' }
        ],
        applications: [
            'Telecom Shelter & Data Center Server Rooms',
            'Substation SCADA & Protection Relay Rooms',
            'Hospital Operation Theatres & Clean Rooms',
            'Pharmaceutical Controlled Temperature Warehouses'
        ]
    },
    {
        id: 'flp-fire-alarm',
        slug: 'flp-fire-alarm',
        num: '10',
        title: 'Flameproof Fire Alarm Control Panel',
        fullTitle: 'Zone 1 Flameproof Microprocessor Fire Alarm & Extinguishing Panel',
        category: 'Hazardous Area',
        standard: 'PESO Ex-d Certified',
        shortDesc: 'Heavy explosion-proof enclosure with integrated optical flame and heat detector loops tailored for chemical refineries and offshore rigs.',
        image: '/images/products/Flameproof Fire Alarm Control Panel.jpeg',
        overview: 'An explosion-proof conventional fire alarm and extinguishing releasing control panel housed in an Ex-d cast aluminum enclosure. Certified by PESO for installation directly inside hazardous Zone 1 chemical storage and solvent handling areas.',
        features: [
            'Class-B 2-wire initiating device circuits for smoke, heat, and flame detectors',
            'Supervised audio-visual notification appliance circuits for flameproof sounders',
            'Cross-zoned coincidence detection logic for automatic gas suppression release',
            'Built-in trickle charger with internal 24V DC sealed lead-acid standby battery',
            'Individual LED status indicators for Zone Alarm, Open Circuit, and Short Circuit'
        ],
        specifications: [
            { label: 'Zone Capacity', value: '2, 4, 8 Initiating Detector Zones' },
            { label: 'Explosion Certification', value: 'PESO / CIMFR Certified Ex-d IIB+H2 T6' },
            { label: 'Output Relays', value: 'Fire Relay, Fault Relay, Solenoid Release Output' },
            { label: 'Standby Battery', value: '24V DC 7Ah Internal Sealed Lead Acid' },
            { label: 'Construction', value: 'Heavy Cast Aluminum Alloy LM6 with Neoprene O-ring' }
        ],
        applications: [
            'Solvent Storage Sheds & Distillation Units',
            'Paint Booths & Chemical Blending Plants',
            'Gas Turbine Generator Enclosures',
            'Marine Oil Tanker Pump Rooms'
        ]
    },
    {
        id: 'fire-pump-fail-safe',
        slug: 'fire-pump-fail-safe',
        num: '11',
        title: 'Fire Pump Fail-Safe Sequencing Logic Panel',
        fullTitle: 'Fail-Safe Fire Hydrant & Sprinkler Pump Sequencing Logic Panel',
        category: 'Fire & Safety',
        standard: 'NFPA-20 Aligned',
        shortDesc: 'Dual battery starting logic and redundant pressure switch sequencing ensuring uninterrupted fire hydrant pressure under mains blackout.',
        image: '/images/products/Fire Pump Fail Safe Sequencing Logic Panel.jpeg',
        overview: 'Provides hardwired and microprocessor redundancy for industrial fire protection hydrant systems. Ensures that if the main electric pump fails or electrical grid power collapses during a fire event, the standby diesel engine fire pump starts reliably within seconds.',
        features: [
            'Triple redundancy starting logic: Pressure Switch, Remote Hydrant Switch, Manual',
            'Dual battery automated cranking sequencer with pulse-crank protection',
            'Engine water jacket temperature and oil pressure safety monitoring',
            'Non-resettable mechanical run-hour counter for insurance compliance',
            'Battery float/boost automatic chargers for both Battery-A and Battery-B'
        ],
        specifications: [
            { label: 'Standard Adherence', value: 'NFPA-20, NBC 2016 Part 4, TAC Rules' },
            { label: 'Starting Cranks', value: 'Configurable 3 to 6 Cranking Attempts' },
            { label: 'Control Circuitry', value: 'Fail-Safe Hardwired Relays + Solid-State Microcontroller' },
            { label: 'Enclosure Rating', value: 'IP55 Free-standing Sheet Steel Console' },
            { label: 'Engine Compatibility', value: 'Cummins, Kirloskar, Ashok Leyland, Caterpillar' }
        ],
        applications: [
            'Petroleum Refineries & LPG Depots',
            'Thermal Power Stations & Nuclear Infrastructure',
            'Chemical Manufacturing Complexes',
            'Port Terminals & Warehousing Hubs'
        ]
    },
    {
        id: 'flp-earthing-relay',
        slug: 'flp-earthing-relay',
        num: '12',
        title: 'FLP Earthing Relay & Decantation Interlock',
        fullTitle: 'Explosion-Proof Static Earthing Relay with Pump Decantation Interlock',
        category: 'Hazardous Area',
        standard: 'OISD Static Safety',
        shortDesc: 'Explosion-proof grounding interlock preventing petroleum tanker decantation until safe equipotential resistance is verified.',
        image: '/images/products/New product launched. FLP Earthing Relay interlocking with decantation  delivery pump..jpeg',
        overview: 'Eliminates electrostatic spark explosion risks during hazardous hydrocarbon road tanker decantation. Continuously monitors the resistance path between the tanker body and earth pit, holding unloading pump motors interlocked until safe grounding (<10 Ohms) is verified.',
        features: [
            'Intrinsically safe earthing clamp circuit with heavy-duty spiral cable',
            'Continual resistance verification ensuring loop resistance is strictly below 10 Ohms',
            'Interlocking potential-free contact to authorize petroleum decantation pump motor',
            'High-visibility dual color status LEDs (Red = Unsafe, Green = Safe to Decant)',
            'Explosion-proof cast aluminum enclosure certified for Zone 1 & 2 gas groups'
        ],
        specifications: [
            { label: 'Ground Resistance Threshold', value: 'Interlocks if Loop Resistance > 10 Ohms' },
            { label: 'Clamp Circuit', value: 'Intrinsically Safe Ex-ia IS Circuit' },
            { label: 'Enclosure Protection', value: 'PESO Certified Ex-d IIB T6 Gb' },
            { label: 'Interlock Output', value: '2x Potential-free Relays 5A @ 230V AC' },
            { label: 'Spiral Cable Length', value: '5-Meter Heavy Retractable Polyurethane Cable' }
        ],
        applications: [
            'Petroleum Tanker Decantation Bays (MS, HSD, Aviation Fuel)',
            'Chemical Solvent Loading & Discharge Gantries',
            'LPG Bulk Bullet Unloading Platforms',
            'Paint & Resin Reactor Powder Charging'
        ]
    },
    {
        id: 'ats-controller',
        slug: 'ats-controller',
        num: '13',
        title: 'Microprocessor ATS Transfer Controller',
        fullTitle: 'Microprocessor-Based Automatic Transfer Switch (ATS) Controller',
        category: 'Power Management',
        standard: 'IEEE 802.3 Grid',
        shortDesc: 'Sub-second dual grid-genset automated synchronization and transfer console preventing cross-feed and Phase sequence mismatches.',
        image: '/images/products/ATS Controller.jpeg',
        overview: 'A smart micro-controller panel managing automatic changeover between utility grid power and emergency diesel generator sets. Delivers sub-second transfer times, prevents neutral cross-feeding, and supervises generator engine cool-down cycles.',
        features: [
            'True RMS 3-phase voltage, frequency, and phase-sequence monitoring on both sources',
            'Programmable transfer delays, generator start timer, and engine cool-down sequence',
            'Dual electrical and mechanical interlock control preventing grid-genset collision',
            'Backlit graphical LCD displaying line voltages, load current, and source status',
            'Emergency manual bypass handle interlock for maintenance isolation'
        ],
        specifications: [
            { label: 'Voltage Rating', value: '415V AC, 3-Phase 4-Wire, 50 Hz' },
            { label: 'Current Rating', value: '63A to 2500A (Air Circuit Breaker or 4-Pole Motorized)' },
            { label: 'Transfer Time', value: '< 200 ms Open Transition' },
            { label: 'Grid Monitoring', value: 'Under/Over Voltage, Under/Over Frequency, Phase Failure' },
            { label: 'Standards', value: 'IEC 60947-6-1 / IEEE 802.3 Grid Ready' }
        ],
        applications: [
            'Continuous Process Chemical Plants',
            'Hospitals & Emergency Trauma Centers',
            'Bank Financial Data Centers & IT Hubs',
            'Airports, Metro Stations & Critical Infrastructure'
        ]
    },
    {
        id: 'cng-apfc-panel',
        slug: 'cng-apfc-panel',
        num: '14',
        title: 'CNG Station APFC & Thyristor Switch Panel',
        fullTitle: 'Thyristor-Switched Automatic Power Factor Correction (APFC) Panel',
        category: 'Power Management',
        standard: 'High Power Factor',
        shortDesc: 'Thyristor-switched real-time automatic power factor correction panel eliminating penalty tariffs on fluctuating compressor motors.',
        image: '/images/products/CNG panel and Thyristor controlled APFC PAN.jpeg',
        overview: 'Engineered specifically for highly dynamic, rapidly fluctuating inductive loads like CNG gas compression reciprocating booster motors. Utilizes solid-state thyristor switches to inject capacitor banks within 20 milliseconds, maintaining unity power factor (0.99) and eliminating utility billing penalties.',
        features: [
            'Rapid sub-cycle thyristor switching without mechanical contactor arcing or transient surges',
            'Microprocessor APFC controller with real-time harmonic distortion (THD) monitoring',
            'Heavy-duty gas-filled MPP capacitors with series detuning reactors (7% / 14%)',
            'Eliminates utility low power factor penalty surcharges and earns incentive rebates',
            'Intelligent forced-draft cooling fans with automatic thermostat control'
        ],
        specifications: [
            { label: 'Capacity Range', value: '50 kVAR to 800 kVAR Detuned Steps' },
            { label: 'Response Time', value: '< 20 Milliseconds Real-Time Compensation' },
            { label: 'Target Power Factor', value: '0.99 Lead/Lag Programmable' },
            { label: 'Detuned Reactor', value: '7% (189 Hz) for 5th Harmonic Suppression' },
            { label: 'Switching Element', value: 'Dual Thyristor Modules with Zero-Cross Firing' }
        ],
        applications: [
            'CNG Mother & Daughter Booster Stations',
            'Automotive Component Press Lines',
            'Plastic Injection Molding & Extruder Factories',
            'Industrial CNC Machining Workshops'
        ]
    },
    {
        id: 'ro-utility-panel',
        slug: 'ro-utility-panel',
        num: '15',
        title: 'RO Utility Control & Desalination Panel',
        fullTitle: 'Turnkey PLC-Based Reverse Osmosis (RO) & Water Utility Automation Console',
        category: 'Automation & Controls',
        standard: 'IP65 Ingress',
        shortDesc: 'Turnkey PLC-driven reverse osmosis high-pressure dosing and valve sequencing automation panel with conductivity alarms.',
        image: '/images/products/RO Utility Control Panel.jpeg',
        overview: 'A PLC-driven turnkey automation control panel for industrial reverse osmosis water treatment plants. Coordinates feed pumps, anti-scalant dosing metering pumps, high-pressure booster pumps, auto-flush solenoid valves, and continuous permeate conductivity meters.',
        features: [
            'Automated pump start/stop sequencing with low suction pressure protection',
            'Integrated conductivity, pH, and flow sensor 4-20mA monitoring channels',
            'Timed membrane auto-flush sequence preventing scaling and membrane fouling',
            'Touchscreen HMI interface displaying process mimic flow diagram and alarms',
            'VFD speed modulation on high-pressure pump optimizing energy efficiency'
        ],
        specifications: [
            { label: 'PLC Controller', value: 'Siemens / Schneider / Mitsubishi Micro PLC' },
            { label: 'HMI Display', value: '7" Color Touchscreen Process Mimic Display' },
            { label: 'Sensor Channels', value: 'Conductivity, pH, Flow, Pressure Transmitters' },
            { label: 'Motor Starters', value: 'VFD for High Pressure Pump, Soft Starters for Raw Water' },
            { label: 'Enclosure Rating', value: 'IP65 Moisture & Chemical Resistant Stainless/CRCA' }
        ],
        applications: [
            'Pharmaceutical Water for Injection (WFI) Plants',
            'Thermal Power Plant Boiler Feed Demineralization',
            'Food, Dairy & Beverage Processing Units',
            'Chemical Effluent Zero-Liquid-Discharge (ZLD) Systems'
        ]
    },
    {
        id: 'battery-changeover',
        slug: 'battery-changeover',
        num: '16',
        title: 'Automatic Dual Battery Changeover System',
        fullTitle: 'Industrial Automatic Dual Battery Changeover System for Substation Auxiliaries',
        category: 'Power Management',
        standard: 'Substation Auxiliary',
        shortDesc: 'Solid-state dual bank changeover panel guaranteeing uninterrupted 110V/220V DC trip supply to high-voltage substation switchgear.',
        image: '/images/products/Automatic Battery Changeover Panel.jpeg',
        overview: 'Guarantees 100% uninterrupted DC auxiliary tripping supply to high-voltage circuit breakers and protection relays. If Battery Bank-1 drops below threshold voltage or experiences cell failure, the system transitions loads to Bank-2 in zero transfer time without tripping breakers.',
        features: [
            'Zero-break solid-state diode-OR / SCR electronic changeover circuit',
            'Individual bank voltage and discharge current monitoring with alarm contacts',
            'Automated cyclic bank exercise feature verifying battery capacity under load',
            'Heavy-duty industrial terminal blocks with knife-disconnect isolation switches',
            'Front-panel rotary selector switch for Manual/Auto/Test mode selection'
        ],
        specifications: [
            { label: 'DC Working Voltage', value: '24V DC / 48V DC / 110V DC / 220V DC' },
            { label: 'Continuous Current', value: '30A, 50A, 100A, 200A Continual' },
            { label: 'Transfer Time', value: 'Zero Milliseconds (Solid-State Diode-OR Matrix)' },
            { label: 'Alarm Relays', value: 'Bank-1 Low, Bank-2 Low, DC Ground Fault, Charger Fail' },
            { label: 'Enclosure Protection', value: 'IP52 Free-standing Sheet Steel Cubicle' }
        ],
        applications: [
            'High-Voltage 132kV / 220kV / 400kV Power Substations',
            'Industrial Captive Turbo-Generator DC Trip Circuits',
            'Critical Hydrocarbon Pipeline Valve Stations',
            'Nuclear Power Plant Auxiliary Control Racks'
        ]
    }
];

export const getProductBySlug = (slug) => {
    if (!slug) return null;
    return productsData.find(p => p.slug === slug || p.id === slug) || null;
};
