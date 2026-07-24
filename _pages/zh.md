---
title: "个人主页"
sitemap: true
permalink: /zh/
lang: zh-CN
---

<nav aria-label="语言切换" style="text-align: right; margin-bottom: 1rem;">
  <a href="{{ '/404.html' | relative_url }}" hreflang="en">English</a> · <strong>中文</strong>
</nav>

## 个人简介

**我目前的研究兴趣包括基础模型架构、高效人工智能——尤其是高效大语言模型与注意力机制——以及类脑计算系统。我愿意考虑学术界和工业界的研究、工程及合作机会。如有相关机会或潜在合作，欢迎通过 [sunpengfei1122@hotmail.com](mailto:sunpengfei1122@hotmail.com) 与我联系。**

我目前是伦敦帝国理工学院 [Neural Reckoning 研究组](https://neural-reckoning.org/)的博士后研究员，与 [Dan Goodman 教授](https://neural-reckoning.org/dan_goodman.html)合作。我的主要研究兴趣包括**基础模型**、**类脑记忆模块**和**时序学习**。

我的研究位于**时序学习**、**神经形态计算**与**高效序列建模**的交叉领域。贯穿这些工作的核心思路，是将“时间”视为一种重要的计算资源：我研究如何利用**可学习延迟**、**延迟线记忆**和**轻量级工作记忆机制**，扩展脉冲与非脉冲神经网络的计算能力，同时满足参数量、数值精度和硬件效率等方面的严格约束。

我欢迎围绕**类脑序列模型**、**高效人工智能（大语言模型与高效注意力）**和**神经形态架构**展开交流与合作，尤其关注以**算法—硬件协同设计**和**可扩展异构计算**为核心的研究。  
邮箱：[p.sun@imperial.ac.uk](mailto:p.sun@imperial.ac.uk) / [sunpengfei1122@hotmail.com](mailto:sunpengfei1122@hotmail.com)。我也在帝国理工学院协助指导硕士研究生，欢迎对 NeuroAI 和神经形态学习感兴趣的同学与我交流。

## 研究方向

我的研究可以概括为四条彼此关联的主线：

- **将时间参数作为计算资源（延迟学习与基于时间的自由度）。**  
  我开发将**轴突延迟**和**延迟异质性**进行端到端优化的学习框架，使模型能够在脉冲语音、事件相机视觉和首脉冲时间分类等时序任务上取得良好表现，并在内存与精度受限的条件下为提升模型容量提供新的维度。

- **面向高效序列建模的工作记忆机制（线性记忆与延迟线架构）。**  
  我设计延迟线和线性记忆模块，以增强轻量级循环网络及类状态空间模型的记忆能力，并将其应用于语音、生物医学与生理信号（如心电图）以及其他长上下文时序数据。

- **面向神经形态系统与异构计算的算法—硬件协同设计。**  
  我研究如何通过学习算法与硬件微架构共同利用时序结构和快慢双通路，构建在内存、延迟和能耗方面均具效率、可实际部署的神经形态解决方案。

- **具有生物学基础的高效计算机制（无参数注意力与隐私感知解码）。**  
  我探索受脉冲神经网络抑制机制启发的**无参数注意力方法**，并开发面向脑电解码的隐私感知生成方法，以降低用户数据采集负担并提升模型鲁棒性。

## 最新动态

祝贺硕士研究生 Ziqiao 凭借项目 “Beyond Rate Coding” 获得伦敦帝国理工学院最佳硕士项目奖——Hertha Ayrton Centenary Prize！

## 精选论文

论文题目和出版信息保留正式英文版本。

### 2026

📄 **Sun, P.**, Su, Z., Achterberg, J., Indiveri, G., Goodman, D. F. M., & Akarca, D.  
**Algorithm-hardware co-design of neuromorphic networks with dual memory pathways.**  
*Nature Machine Intelligence*, 2026. DOI: 10.1038/s42256-026-01255-3  
[GitHub](https://github.com/sunpengfei1122/Dual_memory_pathways) · [期刊页面](https://www.nature.com/articles/s42256-026-01255-3) · [arXiv](https://arxiv.org/abs/2512.07602)

📄 **Sun, P.**, Achterberg, J., Su, Z., Goodman, D. F. M., & Akarca, D.  
**Exploiting heterogeneous delays for efficient computation in low-bit neural networks.**  
*arXiv preprint arXiv:2510.27434*, 2025.  
[PDF](https://arxiv.org/pdf/2510.27434.pdf)

📄 Yu, Y., **Sun, P.**, Jin, Y., Hao, K., Zhang, H., Zhang, Y., Pan, W., Chen, W., Akarca, D., & Xiao, Y.  
**Self-motion as a structural prior for coherent and robust formation of cognitive maps.**  
*arXiv preprint.*  
[arXiv](https://arxiv.org/abs/2512.20044)

📄 Yu, Z., **Sun, P.**, & Goodman, D. F. M.  
**Beyond Rate Coding: Surrogate Gradients Enable Spike Timing Learning in Spiking Neural Networks.**  
*Neuromorphic Computing and Engineering*, 2026.  
[GitHub](https://github.com/neural-reckoning/temporal-shd) · [期刊页面](https://iopscience.iop.org/article/10.1088/2634-4386/ae46d5)

📄 Xue, C., **Sun, P.**, Ornelas, I. O. E., Wang, Z., & Gu, Z.  
**Robust Online Regression via an Interval Type-2 Fuzzy Resilient Learning Machine.**  
*IEEE Transactions on Automation Science and Engineering*, 2026.  
[期刊页面](https://ieeexplore.ieee.org/document/11570860)

### 2025

📄 **Sun, P.**, Jiang, W., Devos, P., & Botteldooren, D.  
**Parallel Delayed Memory Units for Enhanced Temporal Modeling in Biomedical and Bioacoustic Signal Analysis.**  
*IEEE Transactions on Audio, Speech and Language Processing*, 33:4797–4807, 2025.  
[期刊页面](https://ieeexplore.ieee.org/document/11250792) · [arXiv](https://arxiv.org/abs/2512.01626)

📄 **Sun, P.**, Wu, J., Devos, P., & Botteldooren, D.  
**Towards Parameter-Free Attentional Spiking Neural Networks.**  
*Neural Networks*, 185:107154, 2025.  
[PDF](https://doi.org/10.1016/j.neunet.2025.107154) · [GitHub](https://github.com/sunpengfei1122/PfA-SNN)

📄 **Sun, P.**, Wu, J., Zhang, M., Devos, P., & Botteldooren, D.  
**Delayed Memory Unit: Modeling Temporal Dependency Through Delay Gate.**  
*IEEE Transactions on Neural Networks and Learning Systems*, 36(6):10808–10818, 2025.  
[PDF](https://doi.org/10.1109/TNNLS.2024.3490833) · [GitHub](https://github.com/sunpengfei1122/DMU)

📄 **Sun, P.**, De Winne, J., Zhang, M., Devos, P., & Botteldooren, D.  
**Delayed Knowledge Transfer: Cross-Modal Knowledge Transfer From Delayed Stimulus to EEG for Continuous Attention Detection Based on Spike-Represented EEG Signals.**  
*Neural Networks*, 183:107003, 2025.  
[PDF](https://www.sciencedirect.com/science/article/pii/S0893608024009328) · [GitHub](https://github.com/sunpengfei1122/EEG-Cross-modal-knowledge-SNNs)

📄 **Sun, P.**, De Winne, J., Devos, P., & Botteldooren, D.  
**Electroencephalography Decoding with Conditional Identification Generator.**  
*International Journal of Neural Systems*, 33:2550024, 2025.  
[PDF](https://doi.org/10.1142/S0129065725500248)

### 2024

📄 **Sun, P.**, Wu, J., Zhang, M., Devos, P., & Botteldooren, D.  
**Delay Learning Based on Temporal Coding in Spiking Neural Networks.**  
*Neural Networks*, 180:106678, 2024.  
[PDF](https://doi.org/10.1016/j.neunet.2024.106678) · [代码](https://github.com/sunpengfei1122/DLTC)

📄 **Sun, P.**, Jiang, W., Chee, P. Y., & Botteldooren, D.  
**Cell-Stitching for Analog Neuromorphic Computing.**  
*TENCON 2024 – IEEE Region 10 Conference*, 571–574.  
[PDF](https://doi.org/10.1109/TENCON61640.2024.10903095)

### 2023

📄 **Sun, P.**, Chua, Y., Devos, P., & Botteldooren, D.  
**Learnable Axonal Delay in Spiking Neural Networks Improves Spoken Word Recognition.**  
*Frontiers in Neuroscience*, 17:1275944, 2023.  
[PDF](https://doi.org/10.3389/fnins.2023.1275944)

📄 **Sun, P.**, Eqlimi, E., Chua, Y., Devos, P., & Botteldooren, D.  
**Adaptive Axonal Delays in Feedforward Spiking Neural Networks for Accurate Spoken Word Recognition.**  
*ICASSP 2023 – IEEE International Conference on Acoustics, Speech, and Signal Processing.*  
[PDF](https://doi.org/10.1109/ICASSP49357.2023.10094768) · [代码](https://github.com/sunpengfei1122/Adaptive_axonal_delay)

### 2022

📄 **Sun, P.**, Zhu, L., & Botteldooren, D.  
**Axonal Delay as a Short-Term Memory for Feedforward Deep Spiking Neural Networks.**  
*ICASSP 2022 – IEEE International Conference on Acoustics, Speech, and Signal Processing.*  
[PDF](https://arxiv.org/abs/2205.02115)

📄 Shrestha, S. B., Zhu, L., & **Sun, P.**  
**Spikemax: Spike-Based Loss Methods for Classification.**  
*2022 International Joint Conference on Neural Networks (IJCNN)*, 1–7.  
[PDF](https://doi.org/10.1109/IJCNN55064.2022.9892379) · [官方代码](https://github.com/lava-nc/lava-dl/blob/main/src/lava/lib/dl/slayer/loss.py) · [代码](https://github.com/sunpengfei1122/Spikemax)
