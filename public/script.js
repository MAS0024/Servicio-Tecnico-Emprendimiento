const CELULAR_VENDEDOR = "5491157814754";

const products = [
    {
        id: 1,
        title: "Netbook - POSITIVO BGH - N3350",
        price: 125000,
        desc: "La netbook Positivo BGH, a menudo distribuida en el Plan Sarmiento, es un equipo básico para tareas de oficina y navegación, ideal para clases virtuales, Zoom y trabajos de oficina.",
        specs: [
            "Procesador: Intel Celeron N3350 (caché de 2 M, hasta 2,40 GHz)",
            "Memoria RAM: 4GB DDR4",
            "Almacenamiento: Disco Sólido (SSD) 120GB",
            "Pantalla: 11.6\" HD",
            "Sistema Operativo: Windows 10 Optimizado y ACTIVADO",
            "Conectividad: Wi-Fi, Bluetooth, HDMI, USB 2.0 y 3.0",
            "INCLUYE= Cargador. OFFICE 365 INSTALADO Y ACTIVADO"
        ],
          images: [
            "img/n3350-1.png", 
            "img/n3350-2.png",
            "img/n3350-3.png",
            "img/n3350-4.png"
        ]
    },
    {
        id: 2,
        title: "Netbook - POSITIVO BGH - N4000",
        price: 130000,
        desc: "La Positivo BGH con procesador Celeron N4000 es una notebook básica, ideal para tareas de estudio y uso diario. Aunque no es para gaming pesado, es eficiente para navegar, ofimática y multimedia, con modelos que ofrecen buena duración de batería. ",
        specs: [
            "Procesador: Intel Celeron N4000",
            "Memoria RAM: 4GB",
            "Almacenamiento: SSD M.2 120GB",
            "Sistema Operativo: Windows 11 Optimizado y ACTIVADO",
            "Conectividad: Wi-Fi, Bluetooth, HDMI, USB 3.0",
            "Batería: 3/4 horas de duracion",
            "INCLUYE= Cargador. OFFICE 365 INSTALADO Y ACTIVADO"
        ],
        images: [
            "img/4000-4.png",
            "img/4000-2.png",
            "img/4000-3.png",
            "img/4000-1.png"
        ]
    },
    {
        id: 3,
        title: "Netbook - Sarmiento T140J - N4500",
        price: 140000,
        desc: "La netbook Sarmiento T140J es una herramienta potente y eficiente, equipada con un procesador Intel Celeron N4500 y 4GB de RAM DDR4, lo que garantiza un rendimiento fluido en multitarea. Es ideal para estudiantes y profesionales que buscan un equipo confiable para videollamadas en alta definición, gestión de documentos complejos y navegación web rápida, ofreciendo una experiencia superior en plataformas educativas y de oficina.",
        specs: [
            "Procesador: Intel Celeron N4500 (caché de 4 MB; hasta 2,80 GHz)",
            "Memoria RAM: 4GB DDR4 (2933MHz)",
            "Almacenamiento: SSD M2 120GB",
            "Sistema Operativo: Windows 11 Optimizado y ACTIVADO",
            "Conectividad: Wi-Fi, Bluetooth, HDMI, USB 3.0",
            "Batería: 3/4 horas de duracion",
            "INCLUYE= Cargador. OFFICE 365 INSTALADO Y ACTIVADO"
        ],
          images: [
            "img/4.png", 
            "img/2.png",
            "img/3.png",
            "img/1.png"
        ]
    }
];

const servicesList = [
    { task: "Diagnóstico/Revisión", device: "TODO", price: "Gratis" },
    { task: "Formateo e instalación de SO (LIMPIO SIN BACKUP)", device: "PC, NOTEBOOK, AIO", price: 18000 },
    { task: "Formateo e instalación de SO (CON COPIA)", device: "PC, NOTEBOOK, AIO", price: 20000 },
    { task: "Instalación de Programas", device: "PC, NOTEBOOK, AIO", price: "3000 c/u" },
    { task: "Instalación y Configuración de Drivers", device: "PC, NOTEBOOK, AIO", price: 12000 },
    { task: "Reparación de inicio de Windows", device: "PC, NOTEBOOK, AIO", price: 8000 },
    { task: "Eliminación de malware", device: "PC, NOTEBOOK, AIO", price: 5000 },
    { task: "Armado de PC Básica desde 0", device: "PC ESCRITORIO", price: 20000 },
    { task: "Armado de PC Gamer desde 0", device: "PC ESCRITORIO", price: 30000 },
    { task: "Cambio de Componentes", device: "PC ESCRITORIO", price: 5000 },
    { task: "Limpieza de Componentes (Mantenimiento)", device: "PC, NOTEBOOK, AIO", price: 15000 },
    { task: "Cambio de pantalla", device: "NOTEBOOK", price: 6000 },
    { task: "Cambio de teclado", device: "NOTEBOOK", price: 5000 },
    { task: "Cambio de batería", device: "NOTEBOOK", price: 5000 }
];

const productsContainer = document.getElementById("view-products");
if (productsContainer) {
    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        const imgUrl = p.images[0].startsWith("img/") ? p.images[0] : "https://placehold.co/600x400/222/FFF?text=Sin+Imagen";
        
        card.innerHTML = `
            <div class="card-content">
                <img src="${imgUrl}" class="card-img" alt="${p.title}" onerror="this.src='https://placehold.co/600x400/222/FFF?text=Imagen+No+Disp'">
                <div class="card-title">${p.title}</div>
                <div class="card-price">$${p.price.toLocaleString("es-AR")}</div>
                <div class="card-desc-short">${p.desc.substring(0, 80)}...</div>
                <a href="product.html?id=${p.id}" class="btn-primary">VER DETALLES</a>
            </div>
        `;
        productsContainer.appendChild(card);
    });

    productsContainer.onmousemove = e => {
        for(const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
            card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
        }
    };
}


const servicesContainer = document.getElementById("view-services");
if (servicesContainer) {

    const header = document.createElement("div");
    header.className = "service-table-header";
    header.innerHTML = `
        <div>TIPO DE ARREGLO</div>
        <div>EQUIPO</div>
        <div>PRECIO</div>
        <div style="text-align:center">CONTACTO</div>
    `;
    servicesContainer.appendChild(header);

    servicesList.forEach(s => {
        const msg = `Hola! Necesito el servicio de: ${s.task} para mi ${s.device}.`;
        const link = `https://wa.me/${CELULAR_VENDEDOR}?text=${encodeURIComponent(msg)}`;
        
        let displayPrice = typeof s.price === 'number' ? `$${s.price.toLocaleString("es-AR")}` : s.price;

        const row = document.createElement("div");
        row.className = "service-row";
        row.innerHTML = `
            <div class="col-task">${s.task}</div>
            <div class="col-device">${s.device}</div>
            <div class="col-price">${displayPrice}</div>
            <div class="col-action">
                <a href="${link}" target="_blank" class="btn-icon-wsp" title="Consultar por WhatsApp">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        `;
        servicesContainer.appendChild(row);
    });
}

window.switchTab = function(tabName) {
    const vp = document.getElementById("view-products");
    const vs = document.getElementById("view-services");
    const bp = document.getElementById("tab-products");
    const bs = document.getElementById("tab-services");

    vp.style.display = "none";
    vs.style.display = "none";
    
    vp.classList.remove("animate-transition");
    vs.classList.remove("animate-transition");

    bp.classList.remove("active");
    bs.classList.remove("active");

    let targetView;
    if (tabName === 'products') {
        targetView = vp;
        targetView.style.display = "flex"; 
        bp.classList.add("active");
    } else {
        targetView = vs;
        targetView.style.display = "block";
        bs.classList.add("active");
    }

    void targetView.offsetWidth; 
    targetView.classList.add("animate-transition");
}


const detailTitle = document.getElementById("prod-title");

if (detailTitle) {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get('id'));
    const p = products.find(x => x.id === id);

    if (p) {
        detailTitle.innerText = p.title;
        document.getElementById("prod-price").innerText = `$${p.price.toLocaleString("es-AR")}`;
        document.getElementById("prod-desc").innerText = p.desc;
        
        const specsList = document.getElementById("prod-specs");
        if(specsList && p.specs) {
            specsList.innerHTML = ""; 
            p.specs.forEach(spec => {
                const li = document.createElement("li");
                li.innerHTML = `<i class="fas fa-check-circle"></i> ${spec}`;
                specsList.appendChild(li);
            });
        }

        const mainImg = document.getElementById("main-image");
        const mainSrc = p.images[0].startsWith("img/") ? p.images[0] : "https://placehold.co/600x400/222/FFF?text=Sin+Imagen";
        mainImg.src = mainSrc;

        const thumbsContainer = document.getElementById("thumbs-container");
        thumbsContainer.innerHTML = "";
        p.images.forEach((imgSrc, index) => {
            const thumb = document.createElement("img");
            thumb.src = imgSrc.startsWith("img/") ? imgSrc : "https://placehold.co/100x100/222/FFF?text=Foto"; 
            
            thumb.className = "thumb";
            if (index === 0) thumb.classList.add("active");

            thumb.onclick = () => {
                mainImg.src = thumb.src; 
                document.querySelectorAll(".thumb").forEach(t => t.classList.remove("active"));
                thumb.classList.add("active");
            };
            thumbsContainer.appendChild(thumb);
        });

        const btnWsp = document.getElementById("btn-wsp");
        btnWsp.href = `https://wa.me/${CELULAR_VENDEDOR}?text=${encodeURIComponent("Hola! Quiero comprar la " + p.title)}`;

        const modal = document.getElementById("modal");
        const modalImg = document.getElementById("img01");
        const closeSpan = document.querySelector(".close");
        mainImg.onclick = () => { modal.style.display = "flex"; modalImg.src = mainImg.src; };
        closeSpan.onclick = () => modal.style.display = "none";
        modal.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
    } else {
        document.querySelector(".container").innerHTML = "<h2 style='text-align:center'>Producto no encontrado</h2>";
    }
}