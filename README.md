# API-Driven Concept Learning System (Find-S Algorithm)

This repository contains a **dataset-driven, explainable concept learning system**
implemented using the **Find-S algorithm** (Machine Learning – Unit 1).

The project focuses on **learning decision rules from structured data**
and applying them to **real-time API-style JSON inputs** for security-related decisions.

---
## Image

<img width="1792" height="1120" alt="image" src="https://github.com/user-attachments/assets/6bc3efc4-143d-49a7-af70-1c34458b97b8" />

---
## Problem Statement

Traditional machine learning projects often rely on black-box models that
are difficult to interpret.  
This project demonstrates how **concept learning** can be used to build
**transparent, explainable decision systems** using structured datasets.

The system learns a hypothesis from data and uses it to make decisions 
on unseen inputs received via APIs.

---

## Learning Algorithm

- **Find-S Algorithm**
  - Learns the *most specific hypothesis* consistent with all positive examples
  - Maintains explainability through explicit hypothesis representation
  - Reflects inductive bias toward consistency over probability

No probabilistic models or external ML libraries are used.

---

## Dataset Design

- Custom-designed categorical dataset (30+ records)
- Features inspired by real-world email security indicators:
  - URL presence
  - Sender reputation
  - Keyword score
  - Capital usage ratio
  - Attachment type
- Labels :
  - `Spam`
  - `Legitimate`

The dataset is intentionally categorical to align with **concept learning theory**.

---

## 🔄 System Architecture

