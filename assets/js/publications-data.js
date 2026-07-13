window.PUBLICATIONS = [
  {
    "id": "mass",
    "year": 2026,
    "title": "MASS: Motion-Aligned Selective Scan for Refinement in Flow-Based Video Frame Interpolation",
    "authors": [
      "Yoo, Jun-Sang",
      "Jung, Seung-Won"
    ],
    "venue": "European Conference on Computer Vision",
    "venueShort": "ECCV 2026",
    "type": "Conference",
    "selected": true,
    "image": "/assets/img/MASS.png",
    "fallback": "/assets/img/paper-mass.svg",
    "abstract": "Video frame interpolation (VFI) remains challenging under large, non-linear motions and complex occlusions. Existing flow-based approaches often struggle with ambiguous correspondences, while selective state space models typically rely on static grid-based scanning that is misaligned with physical motion. MASS reformulates feature scanning along dynamic, flow-guided trajectories. It introduces learnable non-linear path integration for curved trajectories and a velocity-aware state space model that adapts sampling density and step size to motion magnitude. The aggregated states guide flow and mask refinement in an end-to-end framework, with particularly strong performance on challenging large-motion scenarios.",
    "links": [
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/2606.27718",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "t2m4ar",
    "year": 2026,
    "title": "T2M4AR: Text-to-Motion Generation for Skeleton-Based Action Recognition",
    "authors": [
      "Yoo, Jun-Sang",
      "Lee, Hongjae",
      "Lee, Sangmin",
      "Ma, Chunfei",
      "Lee, Byeongwon",
      "Jung, Seung-Won"
    ],
    "venue": "IEEE International Conference on Image Processing",
    "venueShort": "ICIP 2026",
    "type": "Conference",
    "selected": true,
    "image": "/assets/img/t2m4ar.png",
    "fallback": "/assets/img/paper-t2m4ar.svg",
    "abstract": "Skeleton-based human action recognition has advanced through neural architectures that model spatial configurations and temporal dynamics, but limited real-world training data remains a persistent bottleneck. T2M4AR integrates text-to-motion generation directly into the training loop of action-recognition models, improving data diversity without changing the recognition architecture or inference cost. The method is evaluated with three recent recognition models across five benchmark datasets and consistently improves baseline performance.",
    "links": []
  },
  {
    "id": "refqsr",
    "year": 2024,
    "title": "RefQSR: Reference-based Quantization for Image Super-Resolution Networks",
    "authors": [
      "Lee, Hongjae",
      "Yoo, Jun-Sang",
      "Jung, Seung-Won"
    ],
    "venue": "IEEE Transactions on Image Processing",
    "venueShort": "IEEE TIP 2024",
    "type": "Journal",
    "selected": true,
    "image": "/assets/img/paper-refqsr.webp",
    "fallback": "/assets/img/paper-refqsr.webp",
    "abstract": "Single-image super-resolution models achieve strong reconstruction quality at substantial computational cost. RefQSR exploits image self-similarity for network quantization: representative patches receive high-bit quantization and become references for low-bit quantization of the remaining patches. Dedicated patch-clustering and reference-based quantization modules can be integrated into existing super-resolution networks and quantization methods, yielding efficient inference while preserving reconstruction quality.",
    "links": [
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/2404.01690",
        "kind": "primary"
      },
      {
        "label": "Project",
        "url": "https://jimmy9704.github.io/RefQSR/",
        "kind": "secondary"
      }
    ]
  },
  {
    "id": "vos-vfi",
    "year": 2023,
    "title": "Video Object Segmentation-aware Video Frame Interpolation",
    "authors": [
      "Yoo, Jun-Sang",
      "Lee, Hongjae",
      "Jung, Seung-Won"
    ],
    "venue": "IEEE/CVF International Conference on Computer Vision",
    "venueShort": "ICCV 2023",
    "type": "Conference",
    "selected": true,
    "image": "/assets/img/paper-vos-vfi.webp",
    "fallback": "/assets/img/paper-vos-vfi.webp",
    "abstract": "Video frame interpolation methods usually optimize global image quality, even though foreground objects and their boundaries often matter more to downstream vision tasks. VOS-VFI introduces a video-object-segmentation-aware training framework with segmentation and bidirectional consistency losses. The auxiliary task helps existing interpolation models synthesize clearer object boundaries and improves results across video segmentation, pose estimation, and visual tracking benchmarks.",
    "links": []
  },
  {
    "id": "hive",
    "year": 2023,
    "title": "Pose and Shape Estimation of Humans in Vehicles",
    "authors": [
      "Ko, Kwang-Lim",
      "Yoo, Jun-Sang",
      "Han, Chang-Woo",
      "Kim, Jungyeop",
      "Jung, Seung-Won"
    ],
    "venue": "IEEE Transactions on Intelligent Transportation Systems",
    "venueShort": "IEEE T-ITS 2023",
    "type": "Journal",
    "selected": true,
    "image": "/assets/img/paper-pse.webp",
    "fallback": "/assets/img/paper-pse.webp",
    "abstract": "This work presents an in-vehicle framework for jointly estimating 3D human pose and body shape from a single image. It introduces the Human In VEhicles (HIVE) dataset, containing synthetic RGB and NIR vehicle-interior images with 2D/3D pose and shape annotations. A variational-autoencoder-based in-vehicle pose prior and a two-stage training procedure improve robustness on real vehicle-interior images under varied conditions.",
    "links": []
  },
  {
    "id": "hst",
    "year": 2023,
    "title": "Hierarchical Spatiotemporal Transformers for Video Object Segmentation",
    "authors": [
      "Yoo, Jun-Sang",
      "Lee, Hongjae",
      "Jung, Seung-Won"
    ],
    "venue": "IEEE/CVF International Conference on Computer Vision Workshops",
    "venueShort": "ICCVW 2023",
    "type": "Workshop",
    "selected": true,
    "image": "/assets/img/paper-hst.webp",
    "fallback": "/assets/img/paper-hst.webp",
    "abstract": "HST combines image and video features from Swin Transformer and Video Swin Transformer to model spatial detail and temporal coherence for semi-supervised video object segmentation. Image features act as queries and video features as memory. Efficient hierarchical memory read operations reconstruct precise masks and improve robustness under occlusion, fast motion, and cluttered backgrounds.",
    "links": [
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/2307.08263",
        "kind": "primary"
      }
    ]
  },
  {
    "id": "gps-glass",
    "year": 2023,
    "title": "GPS-GLASS: Learning Nighttime Semantic Segmentation Using Daytime Video and GPS Data",
    "authors": [
      "Lee, Hongjae",
      "Han, Changwoo",
      "Yoo, Jun-Sang",
      "Jung, Seung-Won"
    ],
    "venue": "IEEE/CVF International Conference on Computer Vision Workshops",
    "venueShort": "ICCVW 2023",
    "type": "Workshop",
    "selected": true,
    "image": "/assets/img/paper-gps-glass.webp",
    "fallback": "/assets/img/paper-gps-glass.webp",
    "abstract": "GPS-GLASS trains nighttime semantic segmentation without annotated nighttime images. GPS-aligned daytime and nighttime pairs provide cross-domain pixel-level pseudo-supervision, while optical flow and GPS-based scaling create an additional temporal signal from daytime video. Confidence-weighted pseudo labels reduce the domain gap across several nighttime driving datasets.",
    "links": [
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/2207.13297",
        "kind": "primary"
      },
      {
        "label": "Code",
        "url": "https://github.com/jimmy9704/GPS-GLASS",
        "kind": "secondary"
      }
    ]
  },
  {
    "id": "rzsr",
    "year": 2022,
    "title": "RZSR: Reference-based Zero-Shot Super-Resolution with Depth-Guided Self-Exemplars",
    "authors": [
      "Yoo, Jun-Sang",
      "Kim, Dong-Wook",
      "Lu, Yucheng",
      "Jung, Seung-Won"
    ],
    "venue": "IEEE Transactions on Multimedia",
    "venueShort": "IEEE TMM 2022",
    "type": "Journal",
    "selected": true,
    "image": "/assets/img/paper-rzsr.webp",
    "fallback": "/assets/img/paper-rzsr.webp",
    "abstract": "RZSR combines reference-based and zero-shot super-resolution. At test time, an image-specific network is trained only from samples extracted from the input image. Cross-scale matching and depth information retrieve texture-rich self-exemplars, which serve as high-resolution references for a non-local attention-based super-resolution network. The method improves robustness to real-world degradations and unseen images.",
    "links": [
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/2208.11313",
        "kind": "primary"
      },
      {
        "label": "Code",
        "url": "https://github.com/junsang7777/RZSR-Reference-based-Zero-Shot-Super-Resolution-with-Depth-Guided-Self-Exemplars",
        "kind": "secondary"
      }
    ]
  }
];
