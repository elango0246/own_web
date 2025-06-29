// Sample project data with categories
const projects = [
    {
        id: 1,
        title: "Spine Like-Robotic Arm",
        thumbnail: "Img/Spine_Arm/Thumb.jpeg",
        description: "A Spine like Robotic Arm made with esp8266 and flexcible resistor cotrol by human .",
        videos: [
            "img/Spine_Arm/Arm.mp4"
        ],
        images: [   
            "Img/Spine_Arm/1.jpg",
            "Img/Spine_Arm/b.jpg",
            "https://via.placeholder.com/600x400?text=Circuit+Diagram",
            "Img/Spine_Arm/1.jpg"
            
            
            
        ],
        captions: [  // Add matching captions
            "Initial circuit setup",
            "Main component wiring",
            "Final assembled project",
            "Close-up of sensor module",  // New caption
            "Mobile app interface"       // New caption
        ],
        steps: [
            "Assembled the Arduino Mega with required shields",
            "Connected sensors (temperature, motion, light)",
            "Developed the control logic in Arduino C",
            "Built companion Android app",
            "Integrated with WiFi module for remote control"
        ],
        components: [
            "Arduino Mega",
            "DHT22 Temperature Sensor",
            "PIR Motion Sensor",
            "Relay Module",
            "ESP8266 WiFi Module"
        ],
        category: "arduino",
        tags: ["home automation", "iot", "sensors"],
        date: "2023-05-15",
        codeLink: "https://github.com/example/arduino-smart-home",
        videoLink: "https://youtube.com/example/arduino-smart-home"
    },
    {
        id: 2,
        title: "ESP32 Weather Station",
        thumbnail: "https://via.placeholder.com/300x180?text=ESP32+Weather",
        description: "IoT weather station that collects temperature, humidity, and pressure data and sends it to a cloud dashboard.",
        videos: [
            "https://example.com/videos/esp32-weather.mp4"
        ],
        images: [
            "https://via.placeholder.com/600x400?text=ESP32+Setup",
            "https://via.placeholder.com/600x400?text=Weather+Station",
            "https://via.placeholder.com/600x400?text=Cloud+Dashboard"
        ],
        steps: [
            "Connected BME280 sensor to ESP32",
            "Configured WiFi connection",
            "Set up Firebase Realtime Database",
            "Created web dashboard with Chart.js",
            "Deployed to enclosure with solar power"
        ],
        components: [
            "ESP32 Dev Board",
            "BME280 Sensor",
            "18650 Battery",
            "Solar Panel",
            "3D Printed Case"
        ],
        category: "esp32",
        tags: ["iot", "weather", "sensors"],
        date: "2023-04-10",
        codeLink: "https://github.com/example/esp32-weather",
        videoLink: "https://youtube.com/example/esp32-weather"
    },
    {
        id: 3,
        title: "Raspberry Pi Pico Data Logger",
        thumbnail: "https://via.placeholder.com/300x180?text=Pi+Pico+Logger",
        description: "Data logging system using Raspberry Pi Pico that records sensor data to SD card with timestamp.",
        videos: [
            "https://example.com/videos/pico-datalogger.mp4"
        ],
        images: [
            "https://via.placeholder.com/600x400?text=Pi+Pico+Setup",
            "https://via.placeholder.com/600x400?text=Data+Logging",
            "https://via.placeholder.com/600x400?text=CSV+Output"
        ],
        steps: [
            "Wired SD card module to Pico",
            "Connected DS18B20 temperature sensor",
            "Implemented FAT filesystem support",
            "Created CSV logging function",
            "Added real-time clock for accurate timestamps"
        ],
        components: [
            "Raspberry Pi Pico",
            "MicroSD Card Module",
            "DS18B20 Sensor",
            "Real Time Clock Module",
            "Breadboard and Jumper Wires"
        ],
        category: "raspberry-pi-pico",
        tags: ["data logging", "python", "sensors"],
        date: "2023-03-22",
        codeLink: "https://github.com/example/pico-datalogger",
        videoLink: "https://youtube.com/example/pico-datalogger"
    },
    {
        id: 4,
        title: "CNC Router Controller",
        thumbnail: "https://via.placeholder.com/300x180?text=CNC+Controller",
        description: "Custom CNC router controller using Arduino and GRBL firmware with enhanced features.",
        videos: [
            "https://example.com/videos/cnc-controller.mp4"
        ],
        images: [
            "https://via.placeholder.com/600x400?text=CNC+Machine",
            "https://via.placeholder.com/600x400?text=Controller+Box",
            "https://via.placeholder.com/600x400?text=GRBL+Interface"
        ],
        steps: [
            "Modified GRBL firmware for additional I/O",
            "Built control box with Arduino Uno",
            "Added emergency stop and limit switches",
            "Created custom control panel",
            "Integrated with ChiliPeppr interface"
        ],
        components: [
            "Arduino Uno",
            "CNC Shield",
            "Stepper Drivers",
            "Power Supply",
            "Control Panel Components"
        ],
        category: "cnc",
        tags: ["cnc", "grbl", "arduino"],
        date: "2023-02-18",
        codeLink: "https://github.com/example/cnc-controller",
        videoLink: "https://youtube.com/example/cnc-controller"
    },
    {
        id: 5,
        title: "IoT Plant Monitor",
        thumbnail: "https://via.placeholder.com/300x180?text=IoT+Plant+Monitor",
        description: "ESP8266-based system that monitors soil moisture and light levels for house plants.",
        videos: [
            "https://example.com/videos/iot-plant-monitor.mp4"
        ],
        images: [
            "https://via.placeholder.com/600x400?text=Plant+Sensor",
            "https://via.placeholder.com/600x400?text=Web+Dashboard",
            "https://via.placeholder.com/600x400?text=Circuit+Diagram"
        ],
        steps: [
            "Designed 3D-printed sensor enclosure",
            "Programmed ESP8266 with moisture sensor",
            "Set up MQTT communication",
            "Created Node-RED dashboard",
            "Added notification system for dry plants"
        ],
        components: [
            "ESP8266 NodeMCU",
            "Soil Moisture Sensor",
            "Photoresistor",
            "3D Printed Case",
            "18650 Battery"
        ],
        category: "iot",
        tags: ["iot", "plants", "monitoring"],
        date: "2023-01-05",
        codeLink: "https://github.com/example/iot-plant-monitor",
        videoLink: "https://youtube.com/example/iot-plant-monitor"
    },
    {
        id: 6,
        title: "Arduino Python Serial Control",
        thumbnail: "https://via.placeholder.com/300x180?text=Arduino+Python",
        description: "Controlling Arduino peripherals through Python scripts using serial communication.",
        videos: [
            "https://example.com/videos/arduino-python.mp4"
        ],
        images: [
            "https://via.placeholder.com/600x400?text=Python+Code",
            "https://via.placeholder.com/600x400?text=Serial+Monitor",
            "https://via.placeholder.com/600x400?text=Arduino+Setup"
        ],
        steps: [
            "Created Arduino sketch to handle serial commands",
            "Developed Python library for communication",
            "Added support for multiple device types",
            "Implemented error handling",
            "Created example scripts for common tasks"
        ],
        components: [
            "Arduino Uno",
            "USB Cable",
            "Various Sensors/Actuators",
            "Python 3.8+"
        ],
        category: "arduino-python",
        tags: ["python", "serial", "communication"],
        date: "2022-12-12",
        codeLink: "https://github.com/example/arduino-python",
        videoLink: "https://youtube.com/example/arduino-python"
    },
    {
        id: 7,
        title: "Electronics Basics Tutorial",
        thumbnail: "https://via.placeholder.com/300x180?text=Electronics+Tutorial",
        description: "Beginner-friendly tutorial series covering basic electronics concepts and components.",
        videos: [
            "https://example.com/videos/electronics-tutorial.mp4"
        ],
        images: [
            "https://via.placeholder.com/600x400?text=Breadboard",
            "https://via.placeholder.com/600x400?text=Components",
            "https://via.placeholder.com/600x400?text=Multimeter"
        ],
        steps: [
            "Introduction to basic components",
            "Ohm's Law and circuit fundamentals",
            "Breadboard prototyping techniques",
            "Using multimeters and oscilloscopes",
            "Building simple circuits"
        ],
        components: [
            "Breadboard",
            "Jumper Wires",
            "Resistors",
            "LEDs",
            "Multimeter"
        ],
        category: "tutorials",
        tags: ["tutorial", "beginner", "electronics"],
        date: "2022-11-20",
        codeLink: "https://github.com/example/electronics-tutorial",
        videoLink: "https://youtube.com/example/electronics-tutorial"
    },
    {
        id: 8,
        title: "ESP8266 Web Server",
        thumbnail: "https://via.placeholder.com/300x180?text=ESP8266+Web+Server",
        description: "Creating a web server with ESP8266 to control devices and display sensor data.",
        videos: [
            "https://example.com/videos/esp8266-webserver.mp4"
        ],
        images: [
            "https://via.placeholder.com/600x400?text=Web+Interface",
            "https://via.placeholder.com/600x400?text=ESP8266+Setup",
            "https://via.placeholder.com/600x400?text=Mobile+View"
        ],
        steps: [
            "Set up ESP8266 WiFi connection",
            "Created web server using ESP8266WebServer",
            "Added API endpoints for control",
            "Designed responsive web interface",
            "Implemented security features"
        ],
        components: [
            "ESP8266 NodeMCU",
            "DHT11 Sensor",
            "Relay Module",
            "LEDs for Status"
        ],
        category: "esp8266",
        tags: ["webserver", "iot", "wifi"],
        date: "2022-10-15",
        codeLink: "https://github.com/example/esp8266-webserver",
        videoLink: "https://youtube.com/example/esp8266-webserver"
    },
    {
        id: 9,
        title: "Miscellaneous Experiments",
        thumbnail: "https://via.placeholder.com/300x180?text=Misc+Experiments",
        description: "Various small electronics experiments and prototypes not categorized elsewhere.",
        videos: [
            "https://example.com/videos/misc-experiments.mp4"
        ],
        images: [
            "https://via.placeholder.com/600x400?text=Experiment+1",
            "https://via.placeholder.com/600x400?text=Experiment+2",
            "https://via.placeholder.com/600x400?text=Experiment+3"
        ],
        steps: [
            "Various small projects",
            "Quick prototypes",
            "Component testing",
            "Learning experiments"
        ],
        components: [
            "Various Components",
            "Breadboard",
            "Arduino/ESP Boards"
        ],
        category: "uncategorized",
        tags: ["experiments", "prototyping"],
        date: "2022-09-01",
        codeLink: "https://github.com/example/misc-experiments",
        videoLink: "https://youtube.com/example/misc-experiments"
    }
];

// DOM Elements
const projectsGrid = document.getElementById('allProjectsGrid');
const featuredProjectsGrid = document.getElementById('featuredProjectsGrid');
const recentProjectsGrid = document.getElementById('recentProjectsGrid');
const projectModal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close-btn');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');
const categoryList = document.getElementById('categoryList');
const tagCloud = document.getElementById('tagCloud');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const sortSelect = document.getElementById('sortSelect');
const pagination = document.getElementById('pagination');
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-links a');

// State variables
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'date-desc';
let currentPage = 1;
const projectsPerPage = 6;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadCategoryCounts();
    loadTags();
    setupEventListeners();
    showSection('home');
});

// Load projects into the grid
function loadProjects() {
    const filteredProjects = filterProjects();
    const sortedProjects = sortProjects(filteredProjects);
    const paginatedProjects = paginateProjects(sortedProjects);
    
    // Clear existing projects
    projectsGrid.innerHTML = '';
    
    // Add projects to grid
    paginatedProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
    
    // Load featured projects (first 3)
    featuredProjectsGrid.innerHTML = '';
    projects.slice(0, 3).forEach(project => {
        const projectCard = createProjectCard(project);
        featuredProjectsGrid.appendChild(projectCard);
    });
    
    // Load recent projects (last 3)
    recentProjectsGrid.innerHTML = '';
    projects.slice(-3).forEach(project => {
        const projectCard = createProjectCard(project);
        recentProjectsGrid.appendChild(projectCard);
    });
    
    // Update pagination
    updatePagination(filteredProjects.length);
}

// Create project card element
function createProjectCard(project) {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <img src="${project.thumbnail}" alt="${project.title}" class="project-thumbnail">
        <div class="project-info">
            <h3>${project.title}</h3>
            <span class="project-category">${formatCategory(project.category)}</span>
        </div>
    `;
    
    projectCard.addEventListener('click', () => openProjectModal(project));
    return projectCard;
}

// Format category for display
function formatCategory(category) {
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Filter projects based on current category and search
function filterProjects() {
    let filtered = [...projects];
    
    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(project => project.category === currentCategory);
    }
    
    // Filter by search
    if (currentSearch) {
        const searchTerm = currentSearch.toLowerCase();
        filtered = filtered.filter(project => 
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    return filtered;
}

// Sort projects based on current sort option
function sortProjects(projects) {
    const sorted = [...projects];
    
    switch (currentSort) {
        case 'date-desc':
            return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'date-asc':
            return sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
        case 'name-asc':
            return sorted.sort((a, b) => a.title.localeCompare(b.title));
        case 'name-desc':
            return sorted.sort((a, b) => b.title.localeCompare(a.title));
        default:
            return sorted;
    }
}

// Paginate projects
function paginateProjects(projects) {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return projects.slice(startIndex, endIndex);
}

// Update pagination controls
function updatePagination(totalProjects) {
    const totalPages = Math.ceil(totalProjects / projectsPerPage);
    
    pagination.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    // Previous button
    if (currentPage > 1) {
        const prevLink = document.createElement('a');
        prevLink.href = '#';
        prevLink.innerHTML = '&laquo;';
        prevLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage--;
            loadProjects();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        pagination.appendChild(prevLink);
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        if (i === currentPage) {
            pageLink.classList.add('active');
        }
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            loadProjects();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        pagination.appendChild(pageLink);
    }
    
    // Next button
    if (currentPage < totalPages) {
        const nextLink = document.createElement('a');
        nextLink.href = '#';
        nextLink.innerHTML = '&raquo;';
        nextLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage++;
            loadProjects();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        pagination.appendChild(nextLink);
    }
}

// Load category counts
function loadCategoryCounts() {
    const counts = {
        all: projects.length,
        arduino: 0,
        'arduino-python': 0,
        cnc: 0,
        electronics: 0,
        esp32: 0,
        esp8266: 0,
        iot: 0,
        'raspberry-pi-pico': 0,
        tutorials: 0,
        uncategorized: 0
    };
    
    projects.forEach(project => {
        counts[project.category]++;
    });
    
    // Update count elements
    for (const category in counts) {
        const element = document.getElementById(`${category}Count`);
        if (element) {
            element.textContent = counts[category];
        }
    }
}

// Load tags for tag cloud
function loadTags() {
    const allTags = [];
    
    projects.forEach(project => {
        project.tags.forEach(tag => {
            if (!allTags.includes(tag)) {
                allTags.push(tag);
            }
        });
    });
    
    tagCloud.innerHTML = '';
    allTags.forEach(tag => {
        const tagElement = document.createElement('a');
        tagElement.href = '#';
        tagElement.textContent = tag;
        tagElement.addEventListener('click', (e) => {
            e.preventDefault();
            searchInput.value = tag;
            currentSearch = tag;
            currentCategory = 'all';
            currentPage = 1;
            updateActiveCategory();
            loadProjects();
        });
        tagCloud.appendChild(tagElement);
    });
}

// Open project modal with details
function openProjectModal(project) {
    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('projectCategory').textContent = formatCategory(project.category);
    document.getElementById('projectDate').textContent = project.date;
    document.getElementById('projectTags').textContent = project.tags.join(', ');
    
    // Load videos
    const videoElement = document.getElementById('projectVideo');
    if (project.videos && project.videos.length > 0) {
        videoElement.src = project.videos[0];
        videoElement.style.display = 'block';
    } else {
        videoElement.style.display = 'none';
    }
    
    // Load steps
    const stepsList = document.getElementById('projectSteps');
    stepsList.innerHTML = '';
    project.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsList.appendChild(li);
    });
    
    // Load components
    const componentsList = document.getElementById('projectComponents');
    componentsList.innerHTML = '';
    project.components.forEach(component => {
        const li = document.createElement('li');
        li.textContent = component;
        componentsList.appendChild(li);
    });
    
    // Load links
    document.getElementById('projectCodeLink').href = project.codeLink;
    document.getElementById('projectVideoLink').href = project.videoLink;
    
    // Load image gallery
    const gallery = document.getElementById('thumbnailGallery');
    gallery.innerHTML = '';
    project.images.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
    
        const img = document.createElement('img');
        img.src = image;
        img.alt = `${project.title} - Image ${index + 1}`;
    
        const caption = document.createElement('div');
        caption.className = 'image-caption';
        caption.textContent = project.captions[index] || '';
    
        galleryItem.appendChild(img);
        galleryItem.appendChild(caption);
    
        galleryItem.addEventListener('click', () => {
        // Click handler code remains the same
        });
    
        gallery.appendChild(galleryItem);
        });
    
    // Show modal
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Show specific section
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active-section');
        if (section.id === sectionId) {
            section.classList.add('active-section');
        }
    });
    
    // Update active nav link
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
        }
    });
}

// Update active category in sidebar
function updateActiveCategory() {
    document.querySelectorAll('.category-list a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-category') === currentCategory) {
            link.classList.add('active');
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // Close modal
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeModal();
        }
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Navigation clicks
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute('href').substring(1);
            showSection(sectionId);
            
            // Close mobile menu if open
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            
            // Scroll to top of section
            if (sectionId !== 'home') {
                const section = document.getElementById(sectionId);
                window.scrollTo({
                    top: section.offsetTop - 70,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Category filtering
    document.querySelectorAll('.category-list a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentCategory = link.getAttribute('data-category');
            currentPage = 1;
            updateActiveCategory();
            loadProjects();
            showSection('projects');
            
            // Scroll to projects
            const projectsSection = document.getElementById('projects');
            window.scrollTo({
                top: projectsSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Search functionality
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentSearch = searchInput.value.trim();
        currentCategory = 'all';
        currentPage = 1;
        updateActiveCategory();
        loadProjects();
        showSection('projects');
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchBtn.click();
        }
    });
    
    // Sorting
    sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        loadProjects();
    });
    
    // Contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
        
        alert(`Thank you for your message, ${name}! I will get back to you soon.`);
        contactForm.reset();
    });
}