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
        num: '01',
        title: 'Advanced Fire Pump Duty Controller',
        category: 'Fire & Safety',
        standard: 'TAC / NBC Approved',
        shortDesc: 'Intelligent duty rotation, main electric, standby diesel, and jockey pump sequencing controller with Modbus SCADA communication.',
        image: '/images/products/Advanced Fire Pump Control Panel.jpeg'
    },
    {
        id: 'gas-detection-bt',
        num: '02',
        title: 'Gas Detection Controller with Bluetooth',
        category: 'Hazardous Area',
        standard: 'PESO Certified',
        shortDesc: 'Multi-channel toxic & combustible gas concentration monitoring hub with wireless Bluetooth mobile calibration and 4-20mA telemetry.',
        image: '/images/products/Gas Detection Controller with Bluetooth control.jpeg'
    },
    {
        id: 'flp-dyke-valve',
        num: '03',
        title: 'Flameproof Dyke Valve Control Panel',
        category: 'Hazardous Area',
        standard: 'Zone 1 Ex-d IIB',
        shortDesc: 'Explosion-proof remote valve position actuator console with optical limit sensor telemetry engineered for petroleum dyke containment walls.',
        image: '/images/products/Flameproof Dyke Valve Position Control Pane.jpeg'
    },
    {
        id: 'sop-narrator',
        num: '04',
        title: 'SOP Narrator Audio System',
        category: 'Fire & Safety',
        standard: 'OISD-117 Compliant',
        shortDesc: 'Automated multilingual voice guidance and standard operating procedure broadcaster with LCD status display and emergency override.',
        image: '/images/products/SOP Narrator.jpeg'
    },
    {
        id: 'tank-level',
        num: '05',
        title: 'Tank Level Annunciation Panel',
        category: 'Process Monitoring',
        standard: 'ISO 9001:2015',
        shortDesc: 'Multi-channel ultrasonic and hydrostatic tank level alarm annunciator with graphical LCD interface for bulk oil storage facilities.',
        image: '/images/products/Tank Level Annunciation Panel for Oil Industries.jpeg'
    },
    {
        id: 'graphical-lcd',
        num: '06',
        title: 'Graphical LCD Dual Battery Controller',
        category: 'Power Management',
        standard: 'Class-1 Certified',
        shortDesc: 'Automatic battery changeover panel featuring real-time graphical voltage monitoring, float/boost charging, and automated health diagnostics.',
        image: '/images/products/Graphical LCD Panel.jpeg'
    },
    {
        id: 'flp-sop-narrator',
        num: '07',
        title: 'Flameproof SOP Narrator Panel',
        category: 'Hazardous Area',
        standard: 'Zone 1 Flameproof',
        shortDesc: 'Certified explosion-proof cast-aluminum voice narration system for mandatory safety protocol compliance in Zone 1 classified areas.',
        image: '/images/products/Flameproof SOP Narrator Panel.jpeg'
    },
    {
        id: 'accident-free-days',
        num: '08',
        title: 'Digital Accident-Free Days Display',
        category: 'Process Monitoring',
        standard: 'Industrial Safety',
        shortDesc: 'High-visibility industrial LED safety counter display board for plant-wide tracking of milestone working hours and injury-free records.',
        image: '/images/products/Accident Free Days Display.jpeg'
    },
    {
        id: 'ac-sequential',
        num: '09',
        title: 'Multi-Compressor AC Sequential Panel',
        category: 'Automation & Controls',
        standard: 'IEC 61439',
        shortDesc: 'Microcontroller-based even-wear runtime balancing and emergency failover automation panel for server rooms and critical substation environments.',
        image: '/images/products/AC Sequential Control Panel.jpeg'
    },
    {
        id: 'flp-fire-alarm',
        num: '10',
        title: 'Flameproof Fire Alarm Control Panel',
        category: 'Hazardous Area',
        standard: 'PESO Ex-d Certified',
        shortDesc: 'Heavy explosion-proof enclosure with integrated optical flame and heat detector loops tailored for chemical refineries and offshore rigs.',
        image: '/images/products/Flameproof Fire Alarm Control Panel.jpeg'
    },
    {
        id: 'fire-pump-fail-safe',
        num: '11',
        title: 'Fire Pump Fail-Safe Sequencing Logic Panel',
        category: 'Fire & Safety',
        standard: 'NFPA-20 Aligned',
        shortDesc: 'Dual battery starting logic and redundant pressure switch sequencing ensuring uninterrupted fire hydrant pressure under mains blackout.',
        image: '/images/products/Fire Pump Fail Safe Sequencing Logic Panel.jpeg'
    },
    {
        id: 'flp-earthing-relay',
        num: '12',
        title: 'FLP Earthing Relay & Decantation Interlock',
        category: 'Hazardous Area',
        standard: 'OISD Static Safety',
        shortDesc: 'Explosion-proof grounding interlock preventing petroleum tanker decantation until safe equipotential resistance is verified.',
        image: '/images/products/New product launched. FLP Earthing Relay interlocking with decantation  delivery pump..jpeg'
    },
    {
        id: 'ats-controller',
        num: '13',
        title: 'Microprocessor ATS Transfer Controller',
        category: 'Power Management',
        standard: 'IEEE 802.3 Grid',
        shortDesc: 'Sub-second dual grid-genset automated synchronization and transfer console preventing cross-feed and Phase sequence mismatches.',
        image: '/images/products/ATS Controller.jpeg'
    },
    {
        id: 'cng-apfc-panel',
        num: '14',
        title: 'CNG Station APFC & Thyristor Switch Panel',
        category: 'Power Management',
        standard: 'High Power Factor',
        shortDesc: 'Thyristor-switched real-time automatic power factor correction panel eliminating penalty tariffs on fluctuating compressor motors.',
        image: '/images/products/CNG panel and Thyristor controlled APFC PAN.jpeg'
    },
    {
        id: 'ro-utility-panel',
        num: '15',
        title: 'RO Utility Control & Desalination Panel',
        category: 'Automation & Controls',
        standard: 'IP65 Ingress',
        shortDesc: 'Turnkey PLC-driven reverse osmosis high-pressure dosing and valve sequencing automation panel with conductivity alarms.',
        image: '/images/products/RO Utility Control Panel.jpeg'
    },
    {
        id: 'battery-changeover',
        num: '16',
        title: 'Automatic Dual Battery Changeover System',
        category: 'Power Management',
        standard: 'Substation Auxiliary',
        shortDesc: 'Solid-state dual bank changeover panel guaranteeing uninterrupted 110V/220V DC trip supply to high-voltage substation switchgear.',
        image: '/images/products/Automatic Battery Changeover Panel.jpeg'
    }
];
