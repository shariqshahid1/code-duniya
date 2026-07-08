import { Course } from "@/types";

export const aiMlCourse: Course = {
  id: "ai-ml",
  title: "AI & Machine Learning",
  description: "Artificial Intelligence aur Machine Learning ko seekhein. Supervised, Unsupervised, Deep Learning, NLP ke saath.",
  longDescription: "Artificial Intelligence aur Machine Learning ke concepts ko asaan Roman English mein seekhein. Supervised, Unsupervised, Reinforcement Learning, Neural Networks, aur bahut kuch.",
  lessonsCount: 15,
  duration: "6 hours",
  category: "ai",
  difficulty: "advanced",
  icon: "bot",
  color: "emerald",
  modules: [
    {
      id: "ai-ml-basics",
      title: "AI/ML Basics aur Advanced Topics",
      description: "AI aur Machine Learning ka complete guide.",
      order: 1,
      lessons: [
        {
          id: "aiml-intro",
          title: "AI/ML Introduction",
          description: "AI aur ML ka overview aur pipeline seekhenge.",
          order: 1,
          content: {
            introduction: "AI aur ML ka overview. AI types, ML pipeline, data preprocessing, model evaluation seekhenge.",
            sections: [
              {
                title: "What is AI & ML?",
                explanation: "AI machines mein human intelligence simulate. ML subset of AI - data se seekhna. AI types: Narrow (specific), General (human-like), Super (theoretical). ML types: Supervised, Unsupervised, Reinforcement.",
                example: "# ML Pipeline\n# 1. Data Collection\n# 2. Data Preprocessing\n# 3. Model Selection\n# 4. Training\n# 5. Evaluation\n# 6. Deployment"
              },
              {
                title: "Data Preprocessing",
                explanation: "Data cleaning: missing values (mean/median imputation), feature scaling (Standardization z-score, Normalization min-max). Encoding: One-hot, Label encoder. Train/Test split 80/20. Cross-validation k-fold.",
                example: "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler, LabelEncoder\n\ndf = pd.read_csv('data.csv')\ndf.fillna(df.mean(), inplace=True)\n\nle = LabelEncoder()\ndf['category'] = le.fit_transform(df['category'])\n\nscaler = StandardScaler()\ndf[['age', 'salary']] = scaler.fit_transform(df[['age', 'salary']])\n\nX = df.drop('target', axis=1)\ny = df['target']\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)"
              },
              {
                title: "Model Evaluation",
                explanation: "Classification: Accuracy, Precision, Recall, F1-score, ROC-AUC. Regression: MAE, MSE, RMSE, R-squared. Confusion matrix. Overfitting vs Underfitting. Bias-Variance tradeoff.",
                example: "from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix, classification_report\n\nprint('Accuracy:', accuracy_score(y_test, y_pred))\nprint('Precision:', precision_score(y_test, y_pred, average='weighted'))\nprint('Recall:', recall_score(y_test, y_pred, average='weighted'))\nprint('F1:', f1_score(y_test, y_pred, average='weighted'))\nprint('Confusion Matrix:\\n', confusion_matrix(y_test, y_pred))\nprint(classification_report(y_test, y_pred))"
              }
            ],
            codeExamples: [
              {
                title: "Complete ML Pipeline",
                language: "python",
                code: "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score\nfrom sklearn.model_selection import cross_val_score\n\nmodel = RandomForestClassifier(n_estimators=100, random_state=42)\nmodel.fit(X_train, y_train)\ny_pred = model.predict(X_test)\nprint(f'Accuracy: {accuracy_score(y_test, y_pred):.2f}')\n\nscores = cross_val_score(model, X, y, cv=5)\nprint(f'Cross-val: {scores.mean():.2f} +/- {scores.std():.2f}')"
              }
            ],
            notes: [
              "AI broad field, ML specific subset.",
              "Data preprocessing mein 80% time lagta hai.",
              "Accuracy alone misleading ho sakta hai.",
              "Cross-validation model generalization check karta hai."
            ],
            commonMistakes: [
              { mistake: "Data leakage (scaler fit on whole data)", correction: "Scaler sirf training data par fit karo, test par transform only." },
              { mistake: "Imbalanced data mein accuracy use karna", correction: "F1-score ya ROC-AUC use karein." }
            ],
            interviewQuestions: [
              "Supervised vs Unsupervised?",
              "Bias-Variance tradeoff?"
            ],
            practiceExercises: [
              { question: "Titanic dataset par classification model banao.", hint: "Handle missing values, encode categorical, train/evaluate.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-aiml-intro",
              title: "AI/ML Introduction Quiz",
              questions: [
                { id: "q1", question: "ML types?", options: ["Supervised, Unsupervised, RL", "Linear, Tree, NN", "Train, Test, Val", "None"], correctAnswer: 0, explanation: "ML ke teen main types hain: Supervised (labeled data), Unsupervised (unlabeled data), aur Reinforcement Learning (reward-based)." },
                { id: "q2", question: "Overfitting solution?", options: ["More features", "Regularization", "More epochs", "Less data"], correctAnswer: 1, explanation: "Regularization (L1/L2) model complexity ko reduce karta hai aur overfitting prevent karta hai." },
                { id: "q3", question: "Standardization formula?", options: ["(x-mean)/std", "(x-min)/(max-min)", "x/mean", "log(x)"], correctAnswer: 0, explanation: "Standardization (z-score) formula (x-mean)/std hai, jo data ko 0 mean aur 1 std deviation mein transform karta hai." }
              ]
            }
          },
          duration: "20 min"
        },
        {
          id: "aiml-supervised",
          title: "Supervised Learning",
          description: "Supervised learning algorithms jaise Linear aur Logistic Regression seekhenge.",
          order: 2,
          content: {
            introduction: "Supervised Learning: Linear/Logistic Regression, Decision Trees, Random Forest, SVM, XGBoost seekhenge.",
            sections: [
              {
                title: "Regression Algorithms",
                explanation: "Linear Regression: y = mx + c, Ordinary Least Squares. Regularization: Ridge (L2), Lasso (L1). Polynomial regression. Assumptions: linearity, independence, homoscedasticity.",
                example: "from sklearn.linear_model import LinearRegression, Ridge, Lasso\n\nlr = LinearRegression()\nlr.fit(X_train, y_train)\nprint(f'Coefficients: {lr.coef_}')\n\nridge = Ridge(alpha=1.0)\nridge.fit(X_train, y_train)\n\nlasso = Lasso(alpha=0.1)\nlasso.fit(X_train, y_train)"
              },
              {
                title: "Classification Algorithms",
                explanation: "Logistic Regression: sigmoid, probability output. Decision Tree: Gini/Entropy splits. Random Forest: bagging ensemble. SVM: max margin hyperplane, kernel trick. XGBoost: gradient boosting with regularization.",
                example: "from sklearn.linear_model import LogisticRegression\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.svm import SVC\n\nlr = LogisticRegression()\nlr.fit(X_train, y_train)\n\nrf = RandomForestClassifier(n_estimators=100, max_depth=10, random_state=42)\nrf.fit(X_train, y_train)\n\nsvm = SVC(kernel='rbf', C=1.0, gamma='scale')\nsvm.fit(X_train, y_train)\n\nimport xgboost as xgb\nxgb_model = xgb.XGBClassifier(n_estimators=100, learning_rate=0.1)\nxgb_model.fit(X_train, y_train)"
              },
              {
                title: "Hyperparameter Tuning",
                explanation: "GridSearchCV exhaustive search. RandomizedSearchCV random sampling. Cross-validation with tuning. Common params: C, gamma, n_estimators, max_depth, learning_rate.",
                example: "from sklearn.model_selection import GridSearchCV\n\nparam_grid = {\n    'n_estimators': [50, 100, 200],\n    'max_depth': [5, 10, None],\n    'min_samples_split': [2, 5, 10]\n}\ngrid_search = GridSearchCV(RandomForestClassifier(random_state=42), param_grid, cv=5, scoring='accuracy')\ngrid_search.fit(X_train, y_train)\nprint(f'Best params: {grid_search.best_params_}')\nprint(f'Best score: {grid_search.best_score_:.2f}')"
              }
            ],
            codeExamples: [
              {
                title: "Complete Pipeline",
                language: "python",
                code: "from sklearn.pipeline import Pipeline\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import OneHotEncoder, StandardScaler\n\npreprocessor = ColumnTransformer(transformers=[\n    ('num', StandardScaler(), ['age', 'salary']),\n    ('cat', OneHotEncoder(drop='first'), ['education', 'city'])\n])\n\npipeline = Pipeline(steps=[\n    ('preprocessor', preprocessor),\n    ('classifier', RandomForestClassifier(random_state=42))\n])\n\npipeline.fit(X_train, y_train)\ny_pred = pipeline.predict(X_test)\nprint(f'Accuracy: {accuracy_score(y_test, y_pred):.2f}')"
              }
            ],
            notes: [
              "Linear Regression assumes linear relationship.",
              "Logistic Regression classification (probability output).",
              "Random Forest overfit kam karta hai.",
              "SVM kernel trick non-linear boundaries banata hai.",
              "XGBoost competitions mein most popular."
            ],
            commonMistakes: [
              { mistake: "Feature scaling bhoolna SVM/Logistic mein", correction: "Hamesha scale features for distance-based algorithms." },
              { mistake: "Grid too large for GridSearch", correction: "RandomizedSearchCV use karein large spaces mein." }
            ],
            interviewQuestions: [
              "Linear vs Logistic Regression?",
              "Bagging vs Boosting?"
            ],
            practiceExercises: [
              { question: "House price prediction using Linear Regression.", hint: "California housing dataset, feature engineering, regularization.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-aiml-supervised",
              title: "Supervised Learning Quiz",
              questions: [
                { id: "q1", question: "Logistic regression output?", options: ["Continuous", "Probability", "Binary", "Multi-class"], correctAnswer: 1, explanation: "Logistic regression sigmoid function use karta hai jo 0 aur 1 ke beech probability output deta hai." },
                { id: "q2", question: "Random Forest ensemble method?", options: ["Boosting", "Bagging", "Stacking", "Voting"], correctAnswer: 1, explanation: "Random Forest bagging (Bootstrap Aggregating) use karta hai, jahan multiple decision trees parallel train hote hain." },
                { id: "q3", question: "L1 regularization model?", options: ["Ridge", "Lasso", "ElasticNet", "None"], correctAnswer: 1, explanation: "L1 regularization Lasso Regression mein use hota hai, jo irrelevant features ke coefficients zero kar sakta hai." }
              ]
            }
          },
          duration: "25 min"
        },
        {
          id: "aiml-unsupervised",
          title: "Unsupervised Learning",
          description: "Unsupervised learning: clustering aur dimensionality reduction seekhenge.",
          order: 3,
          content: {
            introduction: "Unsupervised Learning: Clustering (K-Means, DBSCAN, Hierarchical), Dimensionality Reduction (PCA, t-SNE), Anomaly Detection seekhenge.",
            sections: [
              {
                title: "Clustering Algorithms",
                explanation: "K-Means: k clusters, centroid-based, sensitive to scaling. DBSCAN: density-based, noise handling, no k needed. Hierarchical: agglomerative (bottom-up), dendrogram. Elbow method for optimal k. Silhouette score.",
                example: "from sklearn.cluster import KMeans, DBSCAN\nfrom sklearn.metrics import silhouette_score\n\nkmeans = KMeans(n_clusters=3, random_state=42, n_init=10)\nkmeans.fit(X)\nlabels = kmeans.labels_\nprint(f'Silhouette: {silhouette_score(X, labels):.2f}')\n\n# DBSCAN\ndbscan = DBSCAN(eps=0.5, min_samples=5)\ndbscan_labels = dbscan.fit_predict(X)\nprint(f'Noise points: {sum(dbscan_labels == -1)}')"
              },
              {
                title: "Dimensionality Reduction",
                explanation: "PCA: variance-maximizing orthogonal components. Feature extraction. Explained variance ratio. t-SNE: non-linear, visualization. UMAP faster alternative. Uses: visualization, noise reduction, feature engineering.",
                example: "from sklearn.decomposition import PCA\nfrom sklearn.manifold import TSNE\nimport matplotlib.pyplot as plt\n\npca = PCA(n_components=2)\nX_pca = pca.fit_transform(X)\nprint(f'Explained variance ratio: {pca.explained_variance_ratio_}')\nprint(f'Total: {sum(pca.explained_variance_ratio_):.2f}')\n\nplt.scatter(X_pca[:,0], X_pca[:,1], c=y, cmap='viridis', alpha=0.7)\nplt.xlabel('PC1'); plt.ylabel('PC2')\nplt.title('PCA Visualization')\nplt.show()\n\ntsne = TSNE(n_components=2, random_state=42, perplexity=30)\nX_tsne = tsne.fit_transform(X)"
              },
              {
                title: "Anomaly Detection",
                explanation: "Isolation Forest (tree-based), LOF (Local Outlier Factor), One-Class SVM. Applications: fraud detection, network security. Z-score for univariate outliers.",
                example: "from sklearn.ensemble import IsolationForest\nfrom sklearn.neighbors import LocalOutlierFactor\n\niso_forest = IsolationForest(contamination=0.1, random_state=42)\nano_labels = iso_forest.fit_predict(X)\nprint(f'Anomalies: {sum(ano_labels == -1)}')\n\nlof = LocalOutlierFactor(n_neighbors=20, contamination=0.1)\nlof_labels = lof.fit_predict(X)"
              }
            ],
            codeExamples: [
              {
                title: "Customer Segmentation",
                language: "python",
                code: "from sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA\n\nX_scaled = StandardScaler().fit_transform(X)\nkmeans = KMeans(n_clusters=5, random_state=42, n_init=10)\ndf['Cluster'] = kmeans.fit_predict(X_scaled)\n\nX_pca = PCA(n_components=2).fit_transform(X_scaled)\nplt.scatter(X_pca[:,0], X_pca[:,1], c=df['Cluster'], cmap='viridis')\nplt.scatter(kmeans.cluster_centers_[:,0], kmeans.cluster_centers_[:,1], marker='X', s=200, c='red')\nplt.title('Customer Segments')\nplt.show()\n\nprint(df.groupby('Cluster').mean())"
              }
            ],
            notes: [
              "K-Means assumes spherical clusters, sensitive to scaling.",
              "DBSCAN arbitrary shapes, handles noise.",
              "PCA linear dimensionality reduction.",
              "t-SNE visualization ke liye best."
            ],
            commonMistakes: [
              { mistake: "K-Means k random selection", correction: "Elbow method ya silhouette analysis use karein." },
              { mistake: "t-SNE results overinterpretation", correction: "t-SNE visualization ke liye, inference ke liye nahi." }
            ],
            interviewQuestions: [
              "K-Means vs DBSCAN?",
              "PCA use cases?"
            ],
            practiceExercises: [
              { question: "Mall Customer Segmentation using K-Means.", hint: "Annual Income vs Spending Score, elbow method.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-aiml-unsupervised",
              title: "Unsupervised Learning Quiz",
              questions: [
                { id: "q1", question: "Elbow method uses?", options: ["Inertia", "Silhouette", "Entropy", "Gini"], correctAnswer: 0, explanation: "Elbow method inertia (within-cluster sum of squares) use karta hai optimal k clusters find karne ke liye." },
                { id: "q2", question: "PCA transformation type?", options: ["Linear", "Non-linear", "Tree-based", "Ensemble"], correctAnswer: 0, explanation: "PCA (Principal Component Analysis) ek linear dimensionality reduction technique hai jo variance maximize karta hai." },
                { id: "q3", question: "DBSCAN params?", options: ["k, init", "eps, min_samples", "n_clusters, linkage", "C, gamma"], correctAnswer: 1, explanation: "DBSCAN ke do main parameters hain: eps (neighborhood radius) aur min_samples (minimum points for core)." }
              ]
            }
          },
          duration: "25 min"
        },
        {
          id: "aiml-deep-learning",
          title: "Neural Networks aur Deep Learning",
          description: "Neural networks, deep learning aur advanced architectures seekhenge.",
          order: 4,
          content: {
            introduction: "Deep Learning: Neural Networks architecture, activation functions, CNNs, RNNs, LSTMs, Transformers, TensorFlow/PyTorch seekhenge.",
            sections: [
              {
                title: "Neural Network Basics",
                explanation: "Neuron: input * weights + bias -> activation. MLP (Multi-Layer Perceptron). Activations: ReLU (most common), sigmoid (binary), tanh, softmax (multi-class). Forward propagation. Backpropagation + gradient descent. Learning rate, epochs, batch size.",
                example: "import tensorflow as tf\nfrom tensorflow import keras\n\nmodel = keras.Sequential([\n    keras.layers.Dense(64, activation='relu', input_shape=(X_train.shape[1],)),\n    keras.layers.Dropout(0.2),\n    keras.layers.Dense(32, activation='relu'),\n    keras.layers.Dense(1, activation='sigmoid')\n])\n\nmodel.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])\n\nhistory = model.fit(X_train, y_train, epochs=50, batch_size=32,\n                     validation_split=0.2,\n                     callbacks=[keras.callbacks.EarlyStopping(patience=5)])\n\ntest_loss, test_acc = model.evaluate(X_test, y_test)\nprint(f'Test accuracy: {test_acc:.2f}')"
              },
              {
                title: "CNNs",
                explanation: "CNN image processing. Convolution: filters detect features (edges, textures). Pooling: max/average pooling. Flatten -> Dense layers. Architectures: LeNet, AlexNet, VGG, ResNet. Data augmentation. Transfer learning.",
                example: "model = keras.Sequential([\n    layers.Conv2D(32, (3,3), activation='relu', padding='same', input_shape=(32,32,3)),\n    layers.BatchNormalization(),\n    layers.Conv2D(32, (3,3), activation='relu', padding='same'),\n    layers.MaxPooling2D((2,2)),\n    layers.Dropout(0.25),\n    layers.Conv2D(64, (3,3), activation='relu', padding='same'),\n    layers.BatchNormalization(),\n    layers.MaxPooling2D((2,2)),\n    layers.Dropout(0.25),\n    layers.Flatten(),\n    layers.Dense(512, activation='relu'),\n    layers.Dropout(0.5),\n    layers.Dense(10, activation='softmax')\n])\nmodel.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])"
              },
              {
                title: "RNNs, LSTMs & Transformers",
                explanation: "RNN sequential data (text, time series). LSTM solves vanishing gradient - gates (forget, input, output). GRU simpler LSTM. Bidirectional LSTM. Transformers: self-attention, multi-head attention. BERT, GPT. Hugging Face library.",
                example: "model = keras.Sequential([\n    layers.Embedding(vocab_size, 128, input_length=max_length),\n    layers.Bidirectional(layers.LSTM(64, return_sequences=True)),\n    layers.Bidirectional(layers.LSTM(32)),\n    layers.Dropout(0.5),\n    layers.Dense(64, activation='relu'),\n    layers.Dense(1, activation='sigmoid')\n])\nmodel.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])\n\n# Hugging Face Transformer\nfrom transformers import AutoTokenizer, TFAutoModelForSequenceClassification\n\ntokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')\nmodel = TFAutoModelForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=2)\n\ninputs = tokenizer(['This movie is great!', 'Terrible film'], padding=True, truncation=True, return_tensors='tf')\noutputs = model(inputs)\npredictions = tf.nn.softmax(outputs.logits, axis=-1)"
              }
            ],
            codeExamples: [
              {
                title: "Image Classification with CNN",
                language: "python",
                code: "from tensorflow.keras.datasets import cifar10\nfrom tensorflow.keras.utils import to_categorical\n\n(X_train, y_train), (X_test, y_test) = cifar10.load_data()\nX_train = X_train.astype('float32') / 255.0\nX_test = X_test.astype('float32') / 255.0\ny_train = to_categorical(y_train, 10)\ny_test = to_categorical(y_test, 10)\n\nmodel = keras.Sequential([\n    layers.Conv2D(32, (3,3), activation='relu', padding='same', input_shape=(32,32,3)),\n    layers.Conv2D(32, (3,3), activation='relu', padding='same'),\n    layers.MaxPooling2D((2,2)),\n    layers.Dropout(0.25),\n    layers.Conv2D(64, (3,3), activation='relu', padding='same'),\n    layers.MaxPooling2D((2,2)),\n    layers.Dropout(0.25),\n    layers.Flatten(),\n    layers.Dense(512, activation='relu'),\n    layers.Dropout(0.5),\n    layers.Dense(10, activation='softmax')\n])\nmodel.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])\nmodel.fit(X_train, y_train, epochs=20, batch_size=64, validation_split=0.1)"
              }
            ],
            notes: [
              "ReLU most common activation, avoids vanishing gradient.",
              "Dropout regularization prevents overfitting.",
              "CNN image features hierarchically extract karta hai.",
              "LSTM long-range dependencies handle karta hai.",
              "Transfer learning pre-trained models fine-tune."
            ],
            commonMistakes: [
              { mistake: "Learning rate too high/low", correction: "Learning rate scheduler ya adaptive optimizers use karein." },
              { mistake: "Small dataset par complex model leads to overfitting", correction: "Transfer learning ya data augmentation use karein." }
            ],
            interviewQuestions: [
              "CNN vs RNN?",
              "Vanishing gradient problem?"
            ],
            practiceExercises: [
              { question: "MNIST digit classifier using CNN.", hint: "Conv2D, MaxPooling, Flatten, Dense layers.", difficulty: "medium" },
              { question: "IMDb sentiment analysis using LSTM.", hint: "Embedding, Bidirectional LSTM, Dense, sigmoid.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-aiml-deep-learning",
              title: "Neural Networks & Deep Learning Quiz",
              questions: [
                { id: "q1", question: "Most common activation?", options: ["Sigmoid", "ReLU", "Tanh", "Softmax"], correctAnswer: 1, explanation: "ReLU (Rectified Linear Unit) sabse common activation hai kyunki ye vanishing gradient problem solve karta hai aur computationally efficient hai." },
                { id: "q2", question: "CNN pooling purpose?", options: ["Reduce size", "Add features", "Increase depth", "Normalize"], correctAnswer: 0, explanation: "Pooling (max/average pooling) spatial dimensions reduce karta hai, jisse parameters kam hote hain aur overfitting prevent hota hai." },
                { id: "q3", question: "LSTM gates?", options: ["Forget, Input, Output", "Read, Write, Execute", "Encode, Decode", "Left, Right"], correctAnswer: 0, explanation: "LSTM ke teen gates hain: Forget gate (information discard), Input gate (new info add), Output gate (output control)." }
              ]
            }
          },
          duration: "30 min"
        },
        {
          id: "aiml-nlp-cv",
          title: "NLP aur Computer Vision",
          description: "NLP aur Computer Vision ke fundamental concepts seekhenge.",
          order: 5,
          content: {
            introduction: "Natural Language Processing (NLP) aur Computer Vision techniques. Text processing, word embeddings, object detection, image segmentation seekhenge.",
            sections: [
              {
                title: "NLP Fundamentals",
                explanation: "Tokenization, stemming, lemmatization, stop words. Bag of Words, TF-IDF. Word embeddings: Word2Vec, GloVe, FastText. Modern: BERT, GPT embeddings. Text classification, NER, sentiment analysis.",
                example: "from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer\n\ntext = 'I love learning Machine Learning!'\n\n# Bag of Words\nvectorizer = CountVectorizer(max_features=1000, stop_words='english')\nX_bow = vectorizer.fit_transform(corpus)\n\n# TF-IDF\ntfidf = TfidfVectorizer(max_features=1000, ngram_range=(1, 2))\nX_tfidf = tfidf.fit_transform(corpus)\n\n# spaCy embeddings\nimport spacy\nnlp = spacy.load('en_core_web_md')\ndoc = nlp('king queen man woman')\nfor token in doc:\n    print(f'{token.text}: {token.vector[:5]}')"
              },
              {
                title: "Computer Vision Basics",
                explanation: "Image processing: resize, crop, color space. Edge detection: Canny, Sobel. Object detection: YOLO (real-time), Faster R-CNN (accurate). Semantic segmentation: U-Net. Instance segmentation: Mask R-CNN.",
                example: "import cv2\n\nimg = cv2.imread('image.jpg')\nimg_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)\ngray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\nedges = cv2.Canny(gray, 100, 200)\nblurred = cv2.GaussianBlur(img_rgb, (5, 5), 0)\n\n# YOLO object detection\nnet = cv2.dnn.readNet('yolov3.weights', 'yolov3.cfg')\nblob = cv2.dnn.blobFromImage(img, 1/255.0, (416, 416), swapRB=True)\nnet.setInput(blob)\noutputs = net.forward(net.getUnconnectedOutLayersNames())"
              },
              {
                title: "Advanced NLP & CV",
                explanation: "Image generation: GANs (DCGAN, StyleGAN). Neural style transfer. Image captioning. Text-to-image: DALL-E, Stable Diffusion. OCR: Tesseract, EasyOCR. Face recognition: FaceNet. Question answering: BERT. Transfer learning across domains.",
                example: "# Object Detection with TF Hub\nimport tensorflow_hub as hub\n\ndetector = hub.load('https://tfhub.dev/tensorflow/ssd_mobilenet_v2/2')\nimage_tensor = tf.convert_to_tensor(img_rgb)\nimage_tensor = tf.expand_dims(image_tensor, 0)\nresult = detector(image_tensor)\n\n# EasyOCR\nimport easyocr\nreader = easyocr.Reader(['en'])\nresult = reader.readtext('document.jpg')\nfor (bbox, text, confidence) in result:\n    print(f'Text: {text}, Confidence: {confidence:.2f}')\n\n# BERT Classification (HuggingFace)\nfrom transformers import pipeline\nclassifier = pipeline('sentiment-analysis')\nresult = classifier('This product is amazing!')[0]\nprint(f'Label: {result[\"label\"]}, Score: {result[\"score\"]:.2f}')"
              }
            ],
            codeExamples: [
              {
                title: "BERT Text Classification",
                language: "python",
                code: "from transformers import AutoTokenizer, TFAutoModelForSequenceClassification\nimport tensorflow as tf\n\ntokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')\nmodel = TFAutoModelForSequenceClassification.from_pretrained('bert-base-uncased')\n\ntexts = ['This product is amazing!', 'Terrible experience.', 'Average quality.']\nlabels = [1, 0, 2]\n\ninputs = tokenizer(texts, padding=True, truncation=True, max_length=128, return_tensors='tf')\n\nmodel.compile(optimizer=tf.keras.optimizers.Adam(3e-5),\n              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),\n              metrics=['accuracy'])\n\nmodel.fit({'input_ids': inputs['input_ids'], 'attention_mask': inputs['attention_mask']},\n          labels, epochs=3, batch_size=2)\n\npredictions = model.predict({'input_ids': inputs['input_ids'],\n                            'attention_mask': inputs['attention_mask']})\nprint(tf.nn.softmax(predictions.logits, axis=-1))"
              }
            ],
            notes: [
              "TF-IDF important words weigh karta hai.",
              "Word embeddings semantic meaning capture karte hain.",
              "YOLO real-time object detection ke liye best.",
              "Transfer learning NLP mein bhi kaam karta hai.",
              "Data augmentation CV mein overfitting reduce karta hai."
            ],
            commonMistakes: [
              { mistake: "NLP mein case sensitivity ignore karna", correction: "Lowercasing, stop words removal standard preprocessing." },
              { mistake: "Object detection threshold low rakhna", correction: "Threshold 0.5 se kam nahi rakhna." }
            ],
            interviewQuestions: [
              "Word2Vec vs BERT embeddings?",
              "YOLO vs Faster R-CNN?"
            ],
            practiceExercises: [
              { question: "Spam classifier banao using TF-IDF + Random Forest.", hint: "Label spam/ham, TF-IDF vectorize, train, evaluate.", difficulty: "medium" },
              { question: "Face detection using Haar Cascade.", hint: "cv2.CascadeClassifier, detectMultiScale, draw rectangles.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-aiml-nlp-cv",
              title: "NLP & Computer Vision Quiz",
              questions: [
                { id: "q1", question: "TF-IDF stands for?", options: ["Term Frequency-Inverse Document Frequency", "Text Format ID", "Total Feature IDF", "None"], correctAnswer: 0, explanation: "TF-IDF (Term Frequency-Inverse Document Frequency) important words ko weight deta hai jo ek document mein frequent but overall rare hain." },
                { id: "q2", question: "YOLO detection type?", options: ["Two-stage", "Single-stage", "Multi-stage", "All"], correctAnswer: 1, explanation: "YOLO (You Only Look Once) single-stage detector hai jo ek hi forward pass mein object detection karta hai, isliye fast hai." },
                { id: "q3", question: "BERT architecture?", options: ["RNN", "Transformer Encoder", "Transformer Decoder", "CNN"], correctAnswer: 1, explanation: "BERT bidirectional representation ke liye Transformer Encoder use karta hai, jo context ko dono sides se samajhta hai." }
              ]
            }
          },
          duration: "25 min"
        }
      ]
    }
  ],
};

