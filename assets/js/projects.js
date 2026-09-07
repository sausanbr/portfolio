const projects = {
    /* ── THESIS ───────────────────── */
    thesis:{
        badge: "Undergraduate Thesis",
        visibility: "public",
        title: "Fake vs Real Twitter Account Classification",
        timeline: "Oct 2025 — Mar 2026",
        gallery:[
        "assets/img/ta/grafik_dl.png",
        "assets/img/ta/curve.png",
        "assets/img/ta/cm.png",
        "assets/img/ta/pipeline.png"
        ],
        overview:
        "Developed a <strong>multimodal deep learning model</strong> for fake account detection on X (Twitter) by combining tweet text and user metadata through <strong>late fusion</strong>. Evaluated on the Cresci-2017 dataset, the proposed model achieved <strong>99.20% accuracy</strong>, outperforming unimodal approaches.",
        problem:
        "Most fake account detection studies rely on a <strong>single data modality</strong>, analysing either account metadata or tweet text. While metadata captures <strong>behavioural patterns</strong> and text captures <strong>linguistic features</strong>, neither alone provides a complete representation of sophisticated social spambots. The challenge was to build a <strong>multimodal framework</strong> that combines both sources while handling <strong>class imbalance</strong>.",
        solution:
        "Built a <strong>two-branch multimodal framework</strong> that processes tweet text using an <strong>LSTM with GloVe embeddings</strong> and account metadata using an <strong>MLP</strong>. The predictions are combined through <strong>late fusion</strong>, while <strong>random undersampling</strong> is applied to address class imbalance.",
        contributions: [
        "Collected, preprocessed, and engineered features from the Cresci-2017 dataset (tweet text + user metadata)",
        "Built separate LSTM (with GloVe embeddings) and MLP branches for each modality",
        "Implemented late fusion architecture and tuned hyperparameters using Keras Tuner (Hyperband)",
        "Evaluated across 6 comparison scenarios covering unimodal and multimodal approaches",
        "Addressed class imbalance using random undersampling without oversampling"
        ],
        highlights:[
            {label:"Accuracy",value:"0.9920"},
            {label:"Weighted F1 Score",value:"0.9921"},
            {label:"User Accounts",value:"2,907"},
            {label:"Tweets Analyzed",value:"144,992"},
        ],
        stack: [
            "Python", 
            "TensorFlow", 
            "Keras", 
            "LSTM", 
            "MLP", 
            "GloVe", 
            "Pandas", 
            "Scikit-learn", 
            "NLTK",
        ],

        links: [
        {
            label: "Kaggle",
            icon: "fa-brands fa-kaggle",
            url: "https://www.kaggle.com/code/sausanberliana/3-ta-multimodal"
        },
        {
            label: "PDF",
            icon: "fa fa-file-pdf",
            url: "https://eprints2.undip.ac.id/id/eprint/50104/"
        }
    ]
    },

    /* ── INTERNSHIP ───────────────────── */

    intern:{
        badge: "Internship",
        visibility: "private",
        title: "Fixed Asset Management System (PT Dirgantara Indonesia)",
        timeline: "Jan 2025 — Feb 2025",
        gallery:[
            "assets/img/pkl/pkl-1.png",
            "assets/img/pkl/pkl-role.png",
            "assets/img/pkl/pkl-preview.png",
        "assets/img/pkl/pkl-2.png",
        "assets/img/pkl/pkl-3.png",
        "assets/img/pkl/pkl-modal.png",
        "assets/img/pkl/pkl-4.png",
        "assets/img/pkl/pkl-5.png",
        "assets/img/pkl/pkl-8.png",
        "assets/img/pkl/pkl-9.png",
        // "assets/img/pkl/pkl-diagram.png",
        ],
        overview:
        "Developed a web-based <b>Fixed Asset Management System</b> during my internship at PT Dirgantara Indonesia to digitalize asset registration, QR code tracking, depreciation monitoring, and damage reporting for the IT Division.",        
        problem:
        "The existing asset management system had an <b>unstructured database and an outdated interface</b>, which made it difficult to track assets and monitor depreciation. With hundreds of IT assets to manage, the system needed a more organized database, a simpler interface, and a more efficient way to report damaged assets.",
        solution:
        "Built a full-stack web application using <strong>Laravel and MySQL</strong> with role-based access control for two user roles. Core features include CRUD modules for <strong>12 asset categories</strong>, QR code generation for physical asset identification, a damage reporting module with condition tracking, and depreciation visualization on dashboard. Covered end-to-end development from requirements gathering to deployment, and validated functionality through <strong>137 Black Box test cases</strong>.",                
        contributions: [
        "Conducted requirements analysis and designed the database schema and application architecture.",
        "Developed full-stack features using Laravel, including CRUD modules for 12 asset categories.",
        "Integrated QR code generation for asset identification and tracking.",
        "Built damage reporting, asset condition monitoring, and depreciation visualization features.",
        "Performed Black Box Testing across 137 functional test cases, all passed.",
        ],

        highlights:[
            { label: "User Roles", value: "2" },
            {label:"Modules", value:"8"},
            {label:"Asset Categories", value:"12"},
            {label:"Methodology", value:"Waterfall"},
        ],
            stack: [
            "Laravel", 
            "Bootstrap", 
            "HTML/CSS", 
            "PHP", 
            "JavaScript", 
            "MySQL",
        ],

        links: []
    },

    /* ── MAGISTRA ───────────────────── */
    magistra:{
        badge: "Course Project",
        visibility: "public",
        title: "MAGISTRA (Academic Management Information System)",
        timeline: "Aug 2024 — Dec 2024",
        gallery:[
        "assets/img/magistra/mag-login.png",
        "assets/img/magistra/magistra-db.png",
        "assets/img/magistra/magistra-form-jadwal.png",
        "assets/img/magistra/mag-jadwal.png",
        "assets/img/magistra/mag-irs.png",
        "assets/img/magistra/mag-kelola-matkul.png",
        ],
        overview: 
        "MAGISTRA is a web-based <b>academic management system</b> built for a Software Development course. The system supports 5 interconnected user roles (Student, Academic Advisor, Head of Study Program, Academic Division, and Dean), each with distinct responsibilities and approval dependencies, designed to <b>ensure structured study planning</b> and monitoring students's course registration each semester.",
        problem: 
        "Managing course registration across 5 roles without a centralized system leads to <b>coordination gaps, scheduling conflicts, and approval chains that rely on offline communication</b>. Without a structured system, conflicts in room assignments, time slots, and SKS limits are hard to catch before they become real problems.",
        solution: 
        "Built a multi-role platform using <strong>Laravel, React (TypeScript), and Inertia.js</strong> with role-based access control. My responsibility covered the Head of Study Program module, including <b>course management, conflict-free schedule creation</b> across 4 year levels with constraints on room, day, and time, also <b>IRS monitoring</b> for all students in the study program.",
        contributions: [
            "Produced full software engineering documentation: storyboard, use case diagrams, SRS, domain model, robustness diagrams, sequence diagrams, and class diagrams.",
            "Designed relational database schema to support multi-role academic data across 8 functional modules.",
            "Designed and developed the Head of Study Program module, which is schedule creation across 4 year levels with conflict checks on room, time, and day.",
            "Built IRS approval workflow with role-based access: student submission, advisor approval, and study monitoring.",
            "Developed full-stack implementation using Laravel, React (TypeScript), Inertia.js, and Tailwind CSS.",
        ],

        highlights: [
            { label: "User Roles", value: "5" },
            { label: "Modules", value: "8" },
            { label: "Methodology", value: "ICONIX" },
        ],

        stack: [
            "Laravel", 
            "React", 
            "TypeScript", 
            "Inertia.js", 
            "Tailwind CSS", 
            "PHP", 
            "MySQL"],

        links: [
        {
            label: "GitHub",
            icon: "fa-brands fa-github",
            url: "https://github.com/Falydra/magistra"
        },
        {
            label: "Figma",
            icon: "fa-brands fa-figma",
            url: "https://www.figma.com/design/zvlXYM4lTcPrKvS553mP75/MAGISTRA-KU?node-id=12-14&node-type=canvas&t=WhteAj5jyz1Drlfs-0"
        },
    ]
    },

    /* ── SEGMENTATION ───────────────────── */
    segmentation:{
        badge: "Course Project",
        visibility: "public",
        title: "Customer Segmentation",
        timeline: "Nov 2024 — Dec 2024",
        gallery:[
        "assets/img/segmentation/streamlit.png",
        "assets/img/segmentation/elbow curve.png",
        "assets/img/segmentation/boxplot.png",
        "assets/img/segmentation/cluster0.png",
        "assets/img/segmentation/cluster1.png",
        "assets/img/segmentation/cluster2.png"
        ],
        overview: "Segmented 541,909 transaction records into 3 customer clusters using <b>RFM analysis and K-Means clustering to support targeted marketing strategies</b>. Each segment was profiled to help businesses identify high-value customers and allocate marketing efforts more effectively.",
        problem: "Raw transaction data offers little actionable insight without proper grouping. Businesses need a way to distinguish high-value customers from low-engagement ones to allocate marketing efforts more effectively.",

        solution: "Applied <strong>RFM (Recency, Frequency, Monetary)</strong> feature engineering on transaction data, then used <strong>K-Means clustering</strong> with the Elbow Method to determine the optimal number of clusters. Built a <strong>Streamlit app</strong> that allows users to upload a CSV file and get cluster predictions with segment profiling in real time.",
        
        contributions: [
        "Preprocessed and cleaned 541,909 transaction records.",
        "Engineered RFM features and applied K-Means clustering with Elbow Method for optimal cluster selection.",
        "Profiled and visualized each customer segment to generate actionable business insights.",
        "Built a Streamlit app for real-time customer segmentation via CSV upload, returning cluster labels and segment profiles.",    
        ],

        highlights: [
        { label: "Transactions", value: "541,909" },
        { label: "Customer Clusters", value: "3" },
        { label: "Method", value: "K-Means" },
        // { label: "Optimal K", value: "3" },
        ],

        stack: [
            "Python", 
            "Streamlit",
            "Scikit-learn", 
            "K-Means",
            "RFM",
            "Pandas", 
            "Matplotlib", 
            "Seaborn", 
        ],

            links: [
        {
            label: "GitHub",
            icon: "fa-brands fa-github",
            url: "https://github.com/sausanbr/projectML/blob/main/projectmlkelompokunsupervisedkel3-2.ipynb"
        },
    ]
    },

    /* ── MUSIC ───────────────────── */
    music:{
        badge: "Course Project",
        visibility: "public",
        title: "Content-Based Music Recommendation System",
        timeline: "Dec 2025",
        gallery:[
        "assets/img/music/pipeline.png",
        "assets/img/music/waveform.png",
        "assets/img/music/corrmap.png",
        "assets/img/music/pca.png",
        "assets/img/music/cm.png",
        ],
        overview: "A content-based music recommendation system built on the GTZAN dataset (999 songs, 10 genres). The system <b>extracts audio features</b> from raw audio files, <b>classifies the genre using SVM</b>, then <b>recommends</b> the 10 most similar songs using <b>cosine similarity</b> on the extracted feature vectors.",

        problem: "With millions of songs available on streaming platforms, finding music that actually matches a listener's taste is hard. Metadata-based filters often miss the actual sound characteristics of a song, so a system that works directly from audio signals is needed.",

        solution: "Extracted 61 audio features per song from raw .wav files using <strong>Librosa</strong> (MFCC, Chroma STFT, Spectral features, ZCR, HPSS, Tempo) with frame-level extraction and mean-variance pooling across 10 segments. Applied <strong>MinMaxScaler and PCA</strong> for preprocessing, trained <strong>SVM (RBF Kernel)</strong> for genre classification with 77% test accuracy, and built a <strong>content-based recommender</strong> using cosine similarity that achieved Precision@10 of 1.0 and AP@10 of 1.0.",
        
        contributions: [
        "Extracted 61 audio features per song from raw .wav files using Librosa, including MFCC, Chroma STFT, Spectral features, ZCR, and Tempo, with frame-level extraction and mean-variance pooling across 10 segments.",
        "Preprocessed data using MinMaxScaler and PCA (2 components) with train/validation/test split (70/20/10).",
        "Benchmarked 10 classification algorithms and selected SVM (RBF Kernel) as the best model, then optimized hyperparameters using GridSearchCV.",
        "Built a content-based recommender using cosine similarity on normalized audio feature vectors, returning the top 10 most similar songs.",
        "Evaluated the recommendation system using Precision@10, Recall@10, and Average Precision metrics.",
        ],

        highlights: [
        { label: "Songs", value: "999" },
        { label: "Genres", value: "10" },
        { label: "Precision@10", value: "1.0" },
        { label: "SVM Accuracy", value: "77%" },
        ],

        stack: [
            "Python", 
            "Librosa", 
            "Scikit-learn", 
            "SVM", 
            "PCA", 
            "Pandas", 
            "Matplotlib", 
            "Seaborn"],
        links: [
        {
            label: "GitHub",
            icon: "fa-brands fa-github",
            url: "https://github.com/sausanbr/projectML/blob/main/kelompok-4-tbi-mir-similarity-songs-recommendation.ipynb"
        },
    ]
    },

    /* ── LANJAN ───────────────────── */
    lanjan:{
        badge: "KKN Project",
        visibility: "public",
        title: "Kopi Lanjan Branding Website",
        timeline: "Jul 2025 – Aug 2025",
        gallery:[
        "assets/img/lanjan/landing-page.png",
        "assets/img/lanjan/tentang.png",
        "assets/img/lanjan/sejarah.png",
        "assets/img/lanjan/katalog-petani.png",
        "assets/img/lanjan/katalog-inovasi.png",
        "assets/img/lanjan/kisah-unik.png",
        "assets/img/lanjan/pak-sujadi.png",
        "assets/img/lanjan/artikel.png",
        "assets/img/lanjan/artikel-1.png",
        ],
        overview: "A <b>branding and information website built for Desa Lanjan</b> as part of KKN-T Tim 135 Universitas Diponegoro 2025. The site serves as the village's first digital storefront, featuring a product catalog, farmer stories, blog articles, and village profile that giving Kopi Lanjan a proper online presence to reach wider markets.",

        problem: "Desa Lanjan had no digital platform to showcase their coffee products and the stories behind the farmers who grow them. Without an online presence, local products like Kopi Sejiwa Lanjava and KOPILA had limited reach and no direct channel to buyers.",

        solution: "Built a multi-section static website with <strong>HTML, CSS, and JavaScript</strong>, deployed on Netlify with a <strong>CMS-powered admin panel</strong> for content management. Integrated WhatsApp and Shopee purchase links for direct sales, and structured content across 7 sections including product catalog, farmer profiles, blog, and village history.",

        contributions: [
        "Designed and developed the full website end-to-end, from content architecture to deployment.",
        "Built 7 content sections: village profile, product catalog (3 coffee variants & 5 innovation products), farmer stories (6 profiles), blog articles, and news.",
        "Integrated direct purchase links via WhatsApp and Shopee for each product.",
        "Implemented an admin login panel for independent content management post-handover.",
        ],

        highlights: [
        { label: "Sections", value: "7" },
        { label: "Products Listed", value: "8" },
        { label: "Farmer Profiles", value: "6" },
        { label: "Blog Articles", value: "4" },
        ],

        stack: [
            "HTML/CSS", 
            "JavaScript", 
            "Netlify", 
            "CMS"],

        links: [
        { 
            label: "Live Website", 
            icon: "fa fa-external-link", 
            url: "https://desa-lanjan.netlify.app" 
        },
        { 
            label: "GitHub", 
            icon: "fa-brands fa-github", 
            url: "https://github.com/sausanbr/kopi-lanjan" 
        },
        ],
    },

    /* ── SENTIMENT ───────────────────── */
    sentiment:{
        badge: "Course Project",
        visibility: "public",
        title: "Sentiment Analysis of Tokopedia Reviews",
        timeline: "May 2025",
        gallery:[
        "assets/img/tokped/wordcloud.png",
        "assets/img/tokped/distribusi-sentiment.png",
        "assets/img/tokped/lr.png",
        "assets/img/tokped/svm.png",
        ],
        overview: "<b>Classified sentiment of 5,305 Indonesian e-commerce reviews</b> from the PRDECT-ID dataset (29 product categories on Tokopedia) into positive and negative classes. Used IndoBERT embeddings to capture contextual meaning in Bahasa Indonesia, then compared Logistic Regression and SVM as classifiers.",

        problem: "Manual review analysis doesn't scale as Tokopedia alone receives millions of reviews across hundreds of categories. Standard embedding methods like TF-IDF struggle with informal Indonesian text full of slang, abbreviations, and non-standard words, making accurate sentiment classification harder than it looks.",

        solution: "Preprocessed text through lowercasing, special character removal, number removal, and a custom slang normalization dictionary (100+ informal words). Used <strong>IndoBERT (indobenchmark/indobert-base-p1)</strong> to generate contextual CLS embeddings for each review, then trained and compared <strong>Logistic Regression</strong> and <strong>SVM (linear kernel)</strong> classifiers on an 80/20 train-test split. Skipped stopword removal and stemming intentionally to preserve contextual signals for IndoBERT.",

        contributions: [
            "Collected and cleaned the PRDECT-ID dataset: handled missing values, removed 95 duplicate reviews, and dropped irrelevant columns.",
            "Built a custom normalization dictionary with 100+ slang words, abbreviations, and informal expressions common in Indonesian e-commerce reviews.",
            "Generated contextual embeddings using IndoBERT (CLS token representation) for each review in train and test sets.",
            "Trained and evaluated Logistic Regression and SVM classifiers, comparing performance across accuracy, precision, recall, and F1-score.",
        ],

        highlights: [
            { label: "Reviews", value: "5,305" },
            { label: "LR Accuracy", value: "95.00%" },
            { label: "SVM Accuracy", value: "93.21%" },
        ],

        stack: [
            "Python", 
            "IndoBERT", 
            "HuggingFace", 
            "Scikit-learn", 
            "Pandas", 
            "PyTorch", 
            "WordCloud"],

        links: [
        { 
            label: "GitHub", 
            icon: "fa-brands fa-github", 
            url: "https://github.com/sausanbr/projectML/blob/main/Kelompok6_NLP_A_Logistic_Regression_IndoBERT_Embedding_Sentimen_Analisis_PRDECT_ID.ipynb" 
        },
        ],
    },

    /* ── SIKECIL ───────────────────── */
    sikecil:{
        badge: "UI/UX Competition",
        visibility: "private",
        title: "SiKecil",
        timeline: "Mar 2025 — Aug 2025",
        gallery:[
        "assets/img/sikecil/Poster-1.png",
        "assets/img/sikecil/1.png",
        "assets/img/sikecil/2.png",
        "assets/img/sikecil/3.png",
        "assets/img/sikecil/4.png",
        ],
        overview: "SiKecil is a mobile app concept designed to <b>help parents monitor their children's growth and development (ages 0-6)</b> in support of SDG 3: Good Health and Well-Being. The app addresses the problem of stunting in Indonesia, where 19.8% of children experience growth delays, by combining AI and IoT technology to provide accessible, tech-driven parenting support.",

        problem: "Many Indonesian parents lack accessible tools to consistently monitor their child's growth. In 2024, 19.8% of children in Indonesia experienced stunting due to nutritional deficiencies and children with stunting have a 4.75x higher risk of language development delays. Parents often miss critical early warning signs simply because there's no structured, easy-to-use monitoring system.",

        solution: "Designed a mobile app using <strong>Design Thinking methodology</strong> (Empathize, Define, Ideate, Prototype, Test) with two core features: <strong>SiTumbuh</strong> for tracking physical growth metrics, and <strong>SiBicara</strong> for monitoring speech development using AI. The prototype was evaluated with 10 parent respondents using the <strong>User Experience Questionnaire (UEQ)</strong>, scoring <strong>2.4 (Excellent)</strong> overall.",

        contributions: [
            "Conducted user research and empathy mapping with target users (parents of children aged 0-6).",
            "Defined core problems and designed information architecture for two main features: SiTumbuh and SiBicara.",
            "Created UI/UX prototype in Figma following Design Thinking methodology from ideation to high-fidelity mockup.",
            "Conducted usability testing with 10 respondents using UEQ, evaluating Reliability, Clarity, Efficiency, and Stimulation.",
        ],

        highlights: [
            { label: "UEQ Score", value: "2.4 / 3" },
            { label: "UEQ Rating", value: "Excellent" },
            { label: "Test Respondents", value: "10" },
            { label: "Methodology", value: "Design Thinking" },
        ],

        stack: [
            "Figma", 
            "UI Design", 
            "UX Research", 
            "Prototyping", 
            "Design Thinking", 
            "UEQ"
        ],

        links: []
    },

    /* ── YDI ───────────────────── */
    ydi:{
        badge: "Course Competition",
        visibility: "private",
        title: "Youth Development Index (YDI) Analysis in ASEAN",
        gallery:[
        "assets/img/pkl/pkl-preview.png",
        "assets/img/pkl/pkl-1.png",
        "assets/img/pkl/pkl-role.png",
        ],
        overview:"",
        problem:"",
        solution:"",
        contributions: [
        ],
        highlights:[
            {label:"Accuracy",value:"0.9920"},
            {label:"Weighted F1 Score",value:"0.9921"},
            {label:"User Accounts",value:"2,907"},
            {label:"Tweets Analyzed",value:"144,992"},
        ],
        stack: [
            "Laravel", 
            "Bootstrap", 
            "HTML/CSS", 
            "PHP", 
            "JavaScript", 
            "MySQL",
            "phpMyAdmin",
            "XAMPP",
        ],

        links: [
        {
            label: "Private Repository",
            icon: "fa fa-lock",
            url: ""
        },
    ]
    },
}