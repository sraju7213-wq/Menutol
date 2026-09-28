/**
 * Tree of Life Cafe - 3D WebGL Interactive Scene & Sound Engine
 * Powered by Three.js with responsive scroll choreography, mouse gyro tilt,
 * procedural latte art, particle steam physics, and Web Audio feedback.
 */

(function () {
  let scene, camera, renderer;
  let cupGroup, cupMesh, saucerMesh, coffeeMesh, handleMesh;
  let steamParticles, steamGeo, steamPositions, steamVelocities, steamAlphas;
  const STEAM_COUNT = 60;
  let coffeeBeans = [];
  const BEAN_COUNT = 10;
  let rimLight, keyLight, ambientLight;
  let canvasContainer;
  let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let isDragging = false;
  let dragStart = { x: 0, y: 0 };
  let cupRotation = { x: 0.35, y: 0.2, targetX: 0.35, targetY: 0.2 };
  let bounceScale = 1.0;
  let bounceVelocity = 0;
  let currentScrollOffset = 0;
  let soundEnabled = true;
  let audioCtx = null;
  let isInitialized = false;

  // Category Color Palettes for Dynamic Lighting
  const CATEGORY_LIGHTS = {
    "Black Coffee": { hex: 0xf59e0b, intensity: 1.8 },
    "Hot White Coffee": { hex: 0xfef3c7, intensity: 1.9 },
    "Chocolate & Flavor Shakes": { hex: 0xec4899, intensity: 1.7 },
    "Blended & Frappes": { hex: 0x38bdf8, intensity: 1.6 },
    Desserts: { hex: 0xfbbf24, intensity: 1.9 },
    Pizza: { hex: 0xef4444, intensity: 1.6 },
    Rice: { hex: 0x10b981, intensity: 1.6 },
    Burgers: { hex: 0xf97316, intensity: 1.8 },
    Fries: { hex: 0xeab308, intensity: 1.7 },
    Pasta: { hex: 0xf43f5e, intensity: 1.7 },
    Salad: { hex: 0x22c55e, intensity: 1.7 },
    Rolls: { hex: 0xd97706, intensity: 1.7 },
    Sandwiches: { hex: 0xeab308, intensity: 1.7 },
    "Hot Chocolate": { hex: 0xa16207, intensity: 1.8 },
    "Icy Coffee": { hex: 0x0ea5e9, intensity: 1.8 },
    Coolers: { hex: 0x14b8a6, intensity: 1.9 },
    "Fresh Coffee": { hex: 0x16a34a, intensity: 1.8 },
    "Fresh Juices": { hex: 0xf97316, intensity: 1.9 },
    Combos: { hex: 0x8b5cf6, intensity: 1.8 },
    default: { hex: 0x4a7c43, intensity: 1.7 },
  };

  /**
   * Generates a procedural Canvas Texture of a Barista Latte Art Heart
   */
  function createLatteArtTexture() {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    // Crema Base
    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      20,
      size / 2,
      size / 2,
      size / 2,
    );
    gradient.addColorStop(0, "#4a2411");
    gradient.addColorStop(0.45, "#3b1a08");
    gradient.addColorStop(0.85, "#2a1005");
    gradient.addColorStop(1, "#180802");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();

    // Subtle golden crema ring
    ctx.strokeStyle = "rgba(195, 130, 60, 0.45)";
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size * 0.42, 0, Math.PI * 2);
    ctx.stroke();

    // Outer foam halo
    ctx.strokeStyle = "rgba(255, 248, 235, 0.25)";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size * 0.36, 0, Math.PI * 2);
    ctx.stroke();

    // Latte Art Heart Foam
    ctx.save();
    ctx.translate(size / 2, size / 2 - 10);

    // Heart shape path
    function drawHeart(scale, fill, stroke) {
      ctx.save();
      ctx.scale(scale, scale);
      ctx.beginPath();
      ctx.moveTo(0, 30);
      ctx.bezierCurveTo(-60, -40, -110, -120, -50, -170);
      ctx.bezierCurveTo(0, -190, 0, -130, 0, -110);
      ctx.bezierCurveTo(0, -130, 0, -190, 50, -170);
      ctx.bezierCurveTo(110, -120, 60, -40, 0, 30);
      ctx.closePath();

      if (fill) {
        ctx.fillStyle = fill;
        ctx.fill();
      }
      if (stroke) {
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 4 / scale;
        ctx.stroke();
      }
      ctx.restore();
    }

    // Outer milk ripple
    drawHeart(0.85, "rgba(255, 245, 230, 0.4)", null);
    // Main white milk heart
    drawHeart(0.72, "rgba(255, 252, 245, 0.95)", null);
    // Inner cream shade
    drawHeart(0.52, "rgba(250, 238, 215, 0.8)", null);
    // Center heart rosette core
    drawHeart(0.28, "rgba(255, 255, 255, 1)", null);

    // Rosetta pull-through line
    ctx.strokeStyle = "rgba(80, 35, 12, 0.85)";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(0, -185);
    ctx.lineTo(0, 42);
    ctx.stroke();

    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }

  /**
   * Initializes the 3D WebGL Canvas
   */
  function init(containerId = "hero-3d-canvas-container") {
    if (isInitialized) return;
    canvasContainer = document.getElementById(containerId);
    if (!canvasContainer) {
      console.warn("3D Container element not found:", containerId);
      return;
    }

    if (!window.THREE) {
      console.warn("Three.js not loaded. Retrying in 100ms...");
      setTimeout(() => init(containerId), 100);
      return;
    }

    const width = canvasContainer.clientWidth || 380;
    const height = canvasContainer.clientHeight || 280;

    // 1. Scene & Camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 5.2);
    camera.lookAt(0, 0, 0);

    // 2. WebGL Renderer
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    canvasContainer.innerHTML = "";
    canvasContainer.appendChild(renderer.domElement);
    renderer.domElement.style.touchAction = "none";
    renderer.domElement.style.cursor = "grab";

    // 3. Lighting
    setupLighting();

    // 4. Build 3D Coffee Cup & Saucer
    buildCoffeeCup();

    // 5. Build Orbiting Coffee Beans
    buildCoffeeBeans();

    // 6. Build Steam Particle System
    buildSteamParticles();

    // 7. Event Listeners
    setupInteractions();

    isInitialized = true;
    animate(0);
  }

  function setupLighting() {
    // Rich Emerald & Warm Gold Ambient
    ambientLight = new THREE.AmbientLight(0x132e18, 1.8);
    scene.add(ambientLight);

    // Key Light (Warm Royal Gold Sunlight)
    keyLight = new THREE.DirectionalLight(0xffebad, 2.5);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 1;
    keyLight.shadow.camera.far = 15;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    // Fill Light (Soft emerald reflection)
    const fillLight = new THREE.DirectionalLight(0x275932, 0.9);
    fillLight.position.set(-4, 3, -3);
    scene.add(fillLight);

    // Dynamic Category Rim Light (Royal Gold Highlight)
    rimLight = new THREE.PointLight(0xd4af37, 2.6, 12);
    rimLight.position.set(-2.5, 2.0, 1.8);
    scene.add(rimLight);
  }

  function buildCoffeeCup() {
    cupGroup = new THREE.Group();
    scene.add(cupGroup);

    // Deep Royal Forest Green Ceramic Material
    const darkEmeraldMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f2b16,
      roughness: 0.14,
      metalness: 0.12,
    });

    // Polished Royal Gold Metal Material
    const royalGoldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.22,
      metalness: 0.88,
    });

    // Outer Coffee Cup Profile (Lathe geometry)
    const cupPoints = [];
    cupPoints.push(new THREE.Vector2(0.0, 0.0));
    cupPoints.push(new THREE.Vector2(0.65, 0.0));
    cupPoints.push(new THREE.Vector2(0.72, 0.12));
    cupPoints.push(new THREE.Vector2(0.85, 0.45));
    cupPoints.push(new THREE.Vector2(0.98, 0.95));
    cupPoints.push(new THREE.Vector2(1.08, 1.35));
    cupPoints.push(new THREE.Vector2(1.04, 1.37));
    cupPoints.push(new THREE.Vector2(0.95, 1.32));
    cupPoints.push(new THREE.Vector2(0.86, 0.95));
    cupPoints.push(new THREE.Vector2(0.75, 0.5));
    cupPoints.push(new THREE.Vector2(0.62, 0.22));
    cupPoints.push(new THREE.Vector2(0.0, 0.22));

    const cupGeo = new THREE.LatheGeometry(cupPoints, 48);
    cupMesh = new THREE.Mesh(cupGeo, darkEmeraldMaterial);
    cupMesh.castShadow = true;
    cupMesh.receiveShadow = true;
    cupGroup.add(cupMesh);

    // Polished Gold Rim Band on Top of Cup
    const rimGeo = new THREE.TorusGeometry(1.06, 0.038, 16, 48);
    const rimMesh = new THREE.Mesh(rimGeo, royalGoldMaterial);
    rimMesh.rotation.x = Math.PI / 2;
    rimMesh.position.y = 1.34;
    cupGroup.add(rimMesh);

    // Saucer Plate (Lathe geometry)
    const saucerPoints = [];
    saucerPoints.push(new THREE.Vector2(0.0, -0.05));
    saucerPoints.push(new THREE.Vector2(0.8, -0.05));
    saucerPoints.push(new THREE.Vector2(1.1, -0.03));
    saucerPoints.push(new THREE.Vector2(1.5, 0.08));
    saucerPoints.push(new THREE.Vector2(1.7, 0.22));
    saucerPoints.push(new THREE.Vector2(1.68, 0.24));
    saucerPoints.push(new THREE.Vector2(1.45, 0.12));
    saucerPoints.push(new THREE.Vector2(0.9, 0.0));
    saucerPoints.push(new THREE.Vector2(0.0, 0.0));

    const saucerGeo = new THREE.LatheGeometry(saucerPoints, 48);
    saucerMesh = new THREE.Mesh(saucerGeo, darkEmeraldMaterial);
    saucerMesh.position.y = -0.02;
    saucerMesh.castShadow = true;
    saucerMesh.receiveShadow = true;
    cupGroup.add(saucerMesh);

    // Saucer Gold Edge Accent Ring
    const saucerGoldGeo = new THREE.TorusGeometry(1.68, 0.03, 16, 48);
    const saucerGoldMesh = new THREE.Mesh(saucerGoldGeo, royalGoldMaterial);
    saucerGoldMesh.rotation.x = Math.PI / 2;
    saucerGoldMesh.position.y = 0.22;
    cupGroup.add(saucerGoldMesh);

    // Cup Handle in Polished Gold
    const handleGeo = new THREE.TorusGeometry(0.38, 0.085, 24, 36, Math.PI * 1.15);
    handleMesh = new THREE.Mesh(handleGeo, royalGoldMaterial);
    handleMesh.rotation.z = -Math.PI / 1.15;
    handleMesh.position.set(0.95, 0.76, 0);
    handleMesh.castShadow = true;
    cupGroup.add(handleMesh);

    // Steaming Coffee Liquid Top Surface with Procedural Latte Art
    const latteArtTex = createLatteArtTexture();
    const coffeeGeo = new THREE.CircleGeometry(0.92, 48);
    const coffeeMat = new THREE.MeshStandardMaterial({
      map: latteArtTex,
      roughness: 0.35,
      metalness: 0.1,
    });
    coffeeMesh = new THREE.Mesh(coffeeGeo, coffeeMat);
    coffeeMesh.rotation.x = -Math.PI / 2;
    coffeeMesh.position.y = 1.18;
    cupGroup.add(coffeeMesh);

    // Position cup in scene
    cupGroup.position.set(0, -0.5, 0);
  }

  function buildCoffeeBeans() {
    // Roasted Coffee Bean Geometry: Scaled sphere with center crease
    const beanGeo = new THREE.SphereGeometry(0.12, 16, 16);
    beanGeo.scale(1.4, 0.85, 0.95);

    const beanMat = new THREE.MeshStandardMaterial({
      color: 0x451e0e,
      roughness: 0.65,
      metalness: 0.15,
    });

    for (let i = 0; i < BEAN_COUNT; i++) {
      const bean = new THREE.Mesh(beanGeo, beanMat);
      bean.castShadow = true;

      const angle = (i / BEAN_COUNT) * Math.PI * 2;
      const radius = 1.8 + Math.random() * 0.7;
      const height = -0.3 + Math.random() * 1.6;

      bean.userData = {
        baseRadius: radius,
        baseHeight: height,
        angle: angle,
        orbitSpeed: 0.4 + Math.random() * 0.4,
        rotSpeedX: 0.8 + Math.random() * 1.2,
        rotSpeedY: 0.6 + Math.random() * 1.4,
        rotSpeedZ: 0.5 + Math.random() * 1.0,
      };

      bean.position.set(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius,
      );

      scene.add(bean);
      coffeeBeans.push(bean);
    }
  }

  function buildSteamParticles() {
    steamGeo = new THREE.BufferGeometry();
    steamPositions = new Float32Array(STEAM_COUNT * 3);
    steamVelocities = [];
    steamAlphas = new Float32Array(STEAM_COUNT);

    for (let i = 0; i < STEAM_COUNT; i++) {
      resetSteamParticle(i, true);
    }

    steamGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(steamPositions, 3),
    );

    // Particle sprite using canvas
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext("2d");
    const pGrad = pCtx.createRadialGradient(32, 32, 2, 32, 32, 30);
    pGrad.addColorStop(0, "rgba(255, 255, 255, 0.8)");
    pGrad.addColorStop(0.35, "rgba(255, 250, 240, 0.4)");
    pGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 64, 64);

    const pTex = new THREE.CanvasTexture(pCanvas);
    const steamMat = new THREE.PointsMaterial({
      size: 0.42,
      map: pTex,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    steamParticles = new THREE.Points(steamGeo, steamMat);
    scene.add(steamParticles);
  }

  function resetSteamParticle(i, randomY = false) {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * 0.42;

    steamPositions[i * 3] = Math.cos(angle) * r;
    steamPositions[i * 3 + 1] = randomY
      ? 0.7 + Math.random() * 1.6
      : 0.7; // Start slightly above coffee
    steamPositions[i * 3 + 2] = Math.sin(angle) * r;

    steamVelocities[i] = {
      x: (Math.random() - 0.5) * 0.005,
      y: 0.008 + Math.random() * 0.012,
      z: (Math.random() - 0.5) * 0.005,
      curlPhase: Math.random() * Math.PI * 2,
    };
  }

  function setupInteractions() {
    const el = renderer.domElement;

    // Mouse / Pointer Move (Tilt Gyro)
    window.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      mouse.targetX = Math.max(-1.5, Math.min(1.5, x));
      mouse.targetY = Math.max(-1.5, Math.min(1.5, y));
    });

    // Drag to Orbit
    el.addEventListener("pointerdown", (e) => {
      isDragging = true;
      dragStart.x = e.clientX;
      dragStart.y = e.clientY;
      el.style.cursor = "grabbing";
    });

    window.addEventListener("pointermove", (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      dragStart.x = e.clientX;
      dragStart.y = e.clientY;

      cupRotation.targetY += deltaX * 0.012;
      cupRotation.targetX += deltaY * 0.01;
      cupRotation.targetX = Math.max(-0.2, Math.min(0.9, cupRotation.targetX));
    });

    window.addEventListener("pointerup", () => {
      if (isDragging) {
        isDragging = false;
        el.style.cursor = "grab";
      }
    });

    // Window Resize Handling
    window.addEventListener("resize", onWindowResize);

    // Scroll Reactive Sync
    window.addEventListener("scroll", () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      currentScrollOffset = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    });
  }

  function onWindowResize() {
    if (!canvasContainer || !renderer || !camera) return;
    const width = canvasContainer.clientWidth || 380;
    const height = canvasContainer.clientHeight || 280;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  /**
   * Animation & Render Loop
   */
  function animate(timestamp) {
    requestAnimationFrame(animate);

    const time = timestamp * 0.001;

    // Smooth Lerp for Mouse tilt & drag
    mouse.x += (mouse.targetX - mouse.x) * 0.06;
    mouse.y += (mouse.targetY - mouse.y) * 0.06;

    cupRotation.x += (cupRotation.targetX - cupRotation.x) * 0.08;
    cupRotation.y += (cupRotation.targetY - cupRotation.y) * 0.08;

    // Spring Bounce physics on item added
    if (bounceScale !== 1.0 || bounceVelocity !== 0) {
      const springForce = (1.0 - bounceScale) * 0.18;
      bounceVelocity += springForce;
      bounceVelocity *= 0.82; // damping
      bounceScale += bounceVelocity;
      if (Math.abs(bounceScale - 1.0) < 0.001 && Math.abs(bounceVelocity) < 0.001) {
        bounceScale = 1.0;
        bounceVelocity = 0;
      }
    }

    if (cupGroup) {
      // Base gentle idle rotation + user drag + mouse tilt
      const idleFloat = Math.sin(time * 1.5) * 0.04;
      const scrollRotation = currentScrollOffset * Math.PI * 1.5;

      cupGroup.rotation.y = cupRotation.y + mouse.x * 0.25 + scrollRotation * 0.4;
      cupGroup.rotation.x = cupRotation.x + mouse.y * 0.15;
      cupGroup.position.y = -0.5 + idleFloat;

      // Apply bounce scale
      cupGroup.scale.set(bounceScale, bounceScale, bounceScale);
    }

    // Camera scroll tracking: smoothly glide camera
    if (camera) {
      const targetCamY = 2.2 - currentScrollOffset * 0.8;
      const targetCamZ = 5.2 - currentScrollOffset * 0.6;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;
      camera.position.z += (targetCamZ - camera.position.z) * 0.05;
    }

    // Orbiting Coffee Beans Animation
    coffeeBeans.forEach((bean, idx) => {
      const data = bean.userData;
      data.angle += data.orbitSpeed * 0.015;

      const dynamicRadius =
        data.baseRadius + Math.sin(time * 2 + idx) * 0.15;
      bean.position.x = Math.cos(data.angle) * dynamicRadius;
      bean.position.z = Math.sin(data.angle) * dynamicRadius;
      bean.position.y = data.baseHeight + Math.sin(time * 1.8 + idx) * 0.18;

      bean.rotation.x += data.rotSpeedX * 0.02;
      bean.rotation.y += data.rotSpeedY * 0.02;
      bean.rotation.z += data.rotSpeedZ * 0.015;
    });

    // Steam Particles Update
    if (steamParticles && steamPositions) {
      const pos = steamParticles.geometry.attributes.position.array;
      for (let i = 0; i < STEAM_COUNT; i++) {
        const vel = steamVelocities[i];
        vel.curlPhase += 0.03;

        pos[i * 3] += vel.x + Math.sin(vel.curlPhase) * 0.003;
        pos[i * 3 + 1] += vel.y;
        pos[i * 3 + 2] += vel.z + Math.cos(vel.curlPhase) * 0.003;

        // Reset if reached ceiling
        if (pos[i * 3 + 1] > 2.8) {
          resetSteamParticle(i, false);
        }
      }
      steamParticles.geometry.attributes.position.needsUpdate = true;
    }

    renderer.render(scene, camera);
  }

  /**
   * Celebratory bounce and steam puff when an item is added to cart
   */
  function triggerBounce() {
    bounceVelocity = 0.14; // trigger spring bounce
    bounceScale = 1.18;

    // Extra steam burst
    for (let i = 0; i < STEAM_COUNT; i++) {
      if (Math.random() > 0.4) {
        steamVelocities[i].y += 0.015;
      }
    }

    // Accelerate beans
    coffeeBeans.forEach((bean) => {
      bean.userData.orbitSpeed *= 1.4;
      setTimeout(() => {
        bean.userData.orbitSpeed /= 1.4;
      }, 800);
    });

    playSound("pop");
  }

  /**
   * Smoothly transitions lighting color when browsing categories
   */
  function setCategoryMood(categoryName) {
    const config =
      CATEGORY_LIGHTS[categoryName] || CATEGORY_LIGHTS["default"];
    if (rimLight) {
      // Smooth color lerp
      const targetColor = new THREE.Color(config.hex);
      rimLight.color.lerp(targetColor, 0.85);
      rimLight.intensity = config.intensity;
    }
  }

  /**
   * Pure Web Audio API Sound Effects (no external mp3 files required)
   */
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSound(type = "pop") {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "pop") {
        // High bouncy pop for adding items
        osc.type = "sine";
        osc.frequency.setValueAtTime(420, now);
        osc.frequency.exponentialRampToValueAtTime(840, now + 0.08);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

        osc.start(now);
        osc.stop(now + 0.09);
      } else if (type === "click") {
        // Soft wooden click for decrementing
        osc.type = "triangle";
        osc.frequency.setValueAtTime(280, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.06);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === "success") {
        // Celebratory melodic cafe chime
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const noteOsc = ctx.createOscillator();
          const noteGain = ctx.createGain();
          noteOsc.connect(noteGain);
          noteGain.connect(ctx.destination);

          noteOsc.type = "sine";
          noteOsc.frequency.setValueAtTime(freq, now + idx * 0.09);

          noteGain.gain.setValueAtTime(0.15, now + idx * 0.09);
          noteGain.gain.exponentialRampToValueAtTime(
            0.001,
            now + idx * 0.09 + 0.45,
          );

          noteOsc.start(now + idx * 0.09);
          noteOsc.stop(now + idx * 0.09 + 0.45);
        });
      }
    } catch (e) {
      // Audio autoplay policy or unavailable
    }
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    return soundEnabled;
  }

  // Public Global API
  window.Scene3D = {
    init,
    triggerBounce,
    setCategoryMood,
    playSound,
    toggleSound,
    isSoundEnabled: () => soundEnabled,
  };

  function scheduleInit() {
    if (isInitialized) return;
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => init(), { timeout: 1500 });
    } else {
      setTimeout(() => init(), 80);
    }
  }

  // Defer heavy 3D compilation until after critical path UI renders
  if (document.readyState === "complete") {
    scheduleInit();
  } else {
    window.addEventListener("load", scheduleInit);
  }
})();
