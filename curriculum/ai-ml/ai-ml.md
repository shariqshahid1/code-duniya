# 🤖 AI & Machine Learning - Complete Curriculum (2026)

> **"AI duniya badal raha hai. ML, Deep Learning, LLMs - sab seekho!"**

---

## 📖 What is AI/ML?

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 6-12 months |
| **Prerequisites** | Python, Mathematics |

### Definition
**AI** = Machines that think. **ML** = Machines that learn from data. **DL** = ML with neural networks.

### Roman English Explanation
AI ko "smart computer" samjho. ML ko "computer ko sikhana" - jaise bachche ko sikhate ho. Deep Learning ko "computer ka dimaag" - neural networks jo brain ki tarah kaam karte hain. 2026 mein AI har jagah hai - ChatGPT, self-driving cars, medical diagnosis.

---

## 🗺️ Complete Roadmap

```
🟢 BEGINNER: Python for ML | NumPy | Pandas | Matplotlib | Statistics Basics
🔵 INTERMEDIATE: Scikit-Learn | ML Algorithms | Feature Engineering | Model Evaluation
🟠 ADVANCED: TensorFlow | PyTorch | Neural Networks | CNNs | RNNs | Transformers
🔴 PROFESSIONAL: LLMs | RAG | LangChain | Vector DBs | Fine-tuning | Deployment
⚫ EXPERT: AI Agents | MCP | Multimodal | RLHF | Quantization | Edge AI
```

## 🟢 MODULE 1: BEGINNER

### NumPy (Numerical Python)
```python
import numpy as np

# Arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4]])
zeros = np.zeros((3, 4))      # 3x4 zeros
ones = np.ones((2, 3))        # 2x3 ones
range_arr = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]
random_arr = np.random.randn(100)  # Normal distribution

# Operations
arr + 5        # Broadcasting
arr * 2
arr.mean()     # Average
arr.std()      # Standard deviation
arr.sum()      # Sum
arr.reshape(5, 1)  # Reshape
matrix.T       # Transpose
np.dot(arr1, arr2)  # Dot product

# Indexing
arr[1:3]       # Slice
matrix[:, 0]   # First column
matrix[0, :]   # First row
```

### Pandas (Data Analysis)
```python
import pandas as pd

# Series (1D) and DataFrame (2D)
data = pd.DataFrame({
    'name': ['Rahul', 'Priya', 'Amit'],
    'age': [25, 22, 28],
    'city': ['Delhi', 'Mumbai', 'Bangalore'],
    'salary': [50000, 60000, 55000]
})

# Basic operations
data.head()           # First 5 rows
data.info()           # Data types, nulls
data.describe()       # Statistics
data['age'].mean()    # Column mean
data[data['age'] > 23]  # Filter

# Grouping and aggregation
data.groupby('city')['salary'].mean()
data.sort_values('salary', ascending=False)

# Handling missing data
data.dropna()         # Remove nulls
data.fillna(0)        # Fill nulls

# Apply function
data['salary_in_lakhs'] = data['salary'].apply(lambda x: x / 100000)
```

### Matplotlib (Visualization)
```python
import matplotlib.pyplot as plt
import seaborn as sns

# Line plot
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
plt.title('Simple Plot')
plt.xlabel('X Axis')
plt.ylabel('Y Axis')
plt.show()

# Bar chart
plt.bar(['A', 'B', 'C'], [10, 20, 15])
plt.show()

# Histogram
plt.hist(data['age'], bins=10)
plt.show()

# Scatter plot
plt.scatter(data['age'], data['salary'])
plt.show()

# Seaborn (beautiful plots)
sns.boxplot(x='city', y='salary', data=data)
sns.heatmap(correlation_matrix, annot=True)
sns.pairplot(data)
```

## 🔵 MODULE 2: INTERMEDIATE

### Scikit-Learn (ML Algorithms)

```python
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

# Data split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Feature scaling
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 1. Linear Regression (Regression task)
model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)
print(f"R² Score: {model.score(X_test, y_test):.2f}")

# 2. Logistic Regression (Classification)
model = LogisticRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy:.2f}")

# 3. Random Forest
rf = RandomForestClassifier(n_estimators=100, max_depth=10)
rf.fit(X_train, y_train)
importance = rf.feature_importances_

# 4. K-Means Clustering (Unsupervised)
from sklearn.cluster import KMeans
kmeans = KMeans(n_clusters=3)
kmeans.fit(X)
labels = kmeans.labels_
centers = kmeans.cluster_centers_

# 5. PCA (Dimensionality Reduction)
from sklearn.decomposition import PCA
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)
print(f"Explained variance: {pca.explained_variance_ratio_}")

# Model Evaluation
print(confusion_matrix(y_test, predictions))
print(classification_report(y_test, predictions))

# Cross-validation
from sklearn.model_selection import cross_val_score
scores = cross_val_score(model, X, y, cv=5)
print(f"CV Score: {scores.mean():.2f} (+/- {scores.std() * 2:.2f})")
```

### ML Algorithms Summary
```
Supervised Learning:
├── Regression: Linear, Ridge, Lasso, SVR
├── Classification: Logistic Regression, KNN, SVM, Decision Tree, Random Forest, XGBoost
└── Ensemble: Random Forest, Gradient Boosting, AdaBoost, XGBoost, LightGBM

Unsupervised Learning:
├── Clustering: K-Means, DBSCAN, Hierarchical, Gaussian Mixture
└── Dimensionality: PCA, t-SNE, LDA

Model Evaluation:
├── Regression: MSE, MAE, R², RMSE
├── Classification: Accuracy, Precision, Recall, F1, ROC-AUC
└── Validation: Train/Test Split, Cross-validation, Learning Curves
```

## 🟠 MODULE 3: ADVANCED (Deep Learning)

### Neural Networks with TensorFlow/Keras
```python
import tensorflow as tf
from tensorflow import keras

# 1. Sequential API
model = keras.Sequential([
    keras.layers.Dense(128, activation='relu', input_shape=(784,)),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(10, activation='softmax')  # Classification
])

model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

model.fit(X_train, y_train, epochs=10, batch_size=32, validation_split=0.2)
model.evaluate(X_test, y_test)
model.predict(X_test)

# 2. CNN for Images
cnn = keras.Sequential([
    keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    keras.layers.MaxPooling2D((2, 2)),
    keras.layers.Conv2D(64, (3, 3), activation='relu'),
    keras.layers.MaxPooling2D((2, 2)),
    keras.layers.Flatten(),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])

# 3. RNN/LSTM for Sequences
rnn = keras.Sequential([
    keras.layers.LSTM(128, return_sequences=True, input_shape=(100, 50)),
    keras.layers.LSTM(64),
    keras.layers.Dense(1, activation='sigmoid')
])

# 4. Transfer Learning
base_model = keras.applications.ResNet50(
    weights='imagenet',
    include_top=False,
    input_shape=(224, 224, 3)
)
base_model.trainable = False  # Freeze base layers

model = keras.Sequential([
    base_model,
    keras.layers.GlobalAveragePooling2D(),
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dropout(0.5),
    keras.layers.Dense(10, activation='softmax')
])
```

### PyTorch
```python
import torch
import torch.nn as nn
import torch.optim as optim

# 1. Define model
class NeuralNet(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(784, 128)
        self.fc2 = nn.Linear(128, 64)
        self.fc3 = nn.Linear(64, 10)
        self.relu = nn.ReLU()
        self.dropout = nn.Dropout(0.2)
    
    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.dropout(x)
        x = self.relu(self.fc2(x))
        x = self.dropout(x)
        x = self.fc3(x)
        return x

model = NeuralNet()
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop
for epoch in range(10):
    for batch_X, batch_y in dataloader:
        optimizer.zero_grad()
        outputs = model(batch_X)
        loss = criterion(outputs, batch_y)
        loss.backward()
        optimizer.step()
    print(f"Epoch {epoch}: Loss = {loss.item():.4f}")
```

## 🔴 MODULE 4: PROFESSIONAL (LLMs & Generative AI)

### Transformers & Hugging Face
```python
from transformers import pipeline, AutoModelForCausalLM, AutoTokenizer

# Text Generation
generator = pipeline('text-generation', model='gpt2')
result = generator("Once upon a time", max_length=50)

# Sentiment Analysis
classifier = pipeline('sentiment-analysis')
result = classifier("I love this course!")  # [{'label': 'POSITIVE', 'score': 0.99}]

# Question Answering
qa = pipeline('question-answering')
result = qa(
    context="Code Duniya is a free programming platform.",
    question="What is Code Duniya?"
)

# Text Summarization
summarizer = pipeline('summarization')
summary = summarizer(long_text, max_length=50, min_length=20)

# Translation
translator = pipeline('translation', model='Helsinki-NLP/opus-mt-hi-en')
result = translator("नमस्ते, आप कैसे हैं?")

# Load and fine-tune LLM
model = AutoModelForCausalLM.from_pretrained("microsoft/phi-2")
tokenizer = AutoTokenizer.from_pretrained("microsoft/phi-2")
```

### RAG (Retrieval Augmented Generation)
```python
from langchain.chains import RetrievalQA
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.llms import OpenAI

# 1. Load documents
from langchain.document_loaders import TextLoader
loader = TextLoader("data.txt")
documents = loader.load()

# 2. Split into chunks
from langchain.text_splitter import RecursiveCharacterTextSplitter
splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = splitter.split_documents(documents)

# 3. Create embeddings and store
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(chunks, embeddings)

# 4. Create RAG chain
qa_chain = RetrievalQA.from_chain_type(
    llm=OpenAI(),
    chain_type="stuff",
    retriever=vectorstore.as_retriever()
)

# 5. Query
result = qa_chain.run("What is the main topic of the document?")
```

### LangChain & AI Agents
```python
from langchain.agents import AgentExecutor, create_react_agent
from langchain.tools import Tool
from langchain_community.tools import DuckDuckGoSearchRun
from langchain_openai import ChatOpenAI

# Tools
search = DuckDuckGoSearchRun()
calculator = Tool(
    name="Calculator",
    func=lambda x: eval(x),
    description="Useful for math calculations"
)

# Create agent
tools = [search, calculator]
llm = ChatOpenAI(model="gpt-4", temperature=0)
agent = create_react_agent(llm, tools, prompt)

agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)
result = agent_executor.invoke({
    "input": "What is the population of India divided by 2?"
})
```

### Vector Databases
```python
# ChromaDB
import chromadb
client = chromadb.Client()
collection = client.create_collection("documents")

# Add documents
collection.add(
    documents=["Document 1 content", "Document 2 content"],
    metadatas=[{"source": "file1"}, {"source": "file2"}],
    ids=["doc1", "doc2"]
)

# Search
results = collection.query(
    query_texts=["search query"],
    n_results=5
)

# FAISS (Facebook AI Similarity Search)
from langchain.vectorstores import FAISS
vectorstore = FAISS.from_documents(documents, embeddings)
retriever = vectorstore.as_retriever(search_kwargs={"k": 3})
```

### OpenAI API Integration
```python
from openai import OpenAI

client = OpenAI(api_key="sk-...")

# Chat completion
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a programming teacher. Explain in simple Hindi."},
        {"role": "user", "content": "What is a variable in programming?"}
    ],
    temperature=0.7,
    max_tokens=500
)
print(response.choices[0].message.content)

# Image generation
response = client.images.generate(
    model="dall-e-3",
    prompt="A cute robot teaching programming to children",
    n=1,
    size="1024x1024"
)
image_url = response.data[0].url

# Embeddings
response = client.embeddings.create(
    model="text-embedding-3-small",
    input="Your text here"
)
embedding = response.data[0].embedding
```

### AI Agents (2026)
```python
# AutoGen - Multi-agent conversations
from autogen import AssistantAgent, UserProxyAgent, ConversableAgent

assistant = AssistantAgent(
    name="Assistant",
    llm_config={"model": "gpt-4"}
)

user_proxy = UserProxyAgent(
    name="User",
    code_execution_config=False
)

user_proxy.initiate_chat(
    assistant,
    message="Create a Python script to analyze customer data"
)

# CrewAI - Crew of agents
from crewai import Agent, Task, Crew

researcher = Agent(
    role="Research Analyst",
    goal="Find latest AI trends",
    backstory="Expert AI researcher",
    tools=[search]
)

writer = Agent(
    role="Technical Writer",
    goal="Write blog posts about AI",
    backstory="Expert tech writer"
)

task = Task(
    description="Research and write about AI trends 2026",
    agent=researcher
)

crew = Crew(agents=[researcher, writer], tasks=[task])
result = crew.kickoff()
```

### MCP (Model Context Protocol)
```python
# MCP - Standard protocol for AI tools
from mcp import MCPServer, Tool, Resource

server = MCPServer("code-duniya")

@server.tool()
def search_code(query: str) -> str:
    """Search code examples"""
    return f"Results for: {query}"

@server.resource("docs://{topic}")
def get_documentation(topic: str) -> str:
    """Get documentation"""
    return f"Documentation for {topic}"

server.run()
```

---

## 💼 INTERVIEW

### Top AI/ML Questions
1. What is overfitting? How to prevent?
2. Bias vs Variance tradeoff
3. What is gradient descent?
4. CNN vs RNN vs Transformer?
5. What is attention mechanism?
6. What is RAG?
7. What are embeddings?
8. Fine-tuning vs RAG?
9. What is RLHF?
10. What are AI agents?

### ML Cheat Sheet
```
Model Selection:
├── Classification → LogisticRegression, RandomForest, XGBoost
├── Regression → LinearRegression, RandomForestRegressor
├── Clustering → KMeans, DBSCAN
├── NLP → Transformers, LSTM, BERT
└── Computer Vision → CNN, ResNet, YOLO

Evaluation:
├── Accuracy = (TP + TN) / (TP + TN + FP + FN)
├── Precision = TP / (TP + FP)
├── Recall = TP / (TP + FN)
├── F1 = 2 * (P * R) / (P + R)
└── MSE = mean((y_true - y_pred)²)
```

---

> **"AI seekho, future banayein! 🤖 2026 mein AI har jagah hai."**
>
> **[Next: Cyber Security →](../cyber-security/cyber-security.md)**

[Back to Main Curriculum →](../README.md)
