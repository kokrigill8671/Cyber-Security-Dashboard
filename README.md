# 🛡️ Cyber Security Incident Response Management System (CS-IRMS)

![Python](https://img.shields.io/badge/Python-3.13-blue)
![Flask](https://img.shields.io/badge/Flask-3.x-green)
![SQLite](https://img.shields.io/badge/SQLite-Database-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple)
![Chart.js](https://img.shields.io/badge/Chart.js-Latest-red)

---

# 📖 Project Overview

The **Cyber Security Incident Response Management System (CS-IRMS)** is a web-based application developed using **Python Flask**, **SQLite**, **Bootstrap 5**, and **Chart.js**.

The project helps organizations monitor, manage, and respond to cybersecurity incidents through an intuitive dashboard and centralized incident management system.

This project has been developed as an **MCA Cyber Security Final Year Project**.

---

# 🎯 Objectives

- Monitor cyber security incidents
- Track incident status
- Risk assessment
- User management
- Security policy management
- Generate security reports
- Dashboard analytics
- Audit logging
- Improve incident response process

---

# 🚀 Features

## Authentication

- Secure Login
- Logout
- Session Management

---

## Dashboard

- Total Incidents
- Open Incidents
- Resolved Incidents
- Critical Incidents
- Weekly Incident Chart
- Severity Pie Chart
- Live Alerts
- Risk Assessment
- Threat Intelligence
- System Health
- User Activity

---

## Incident Management

- Add Incident
- Edit Incident
- Delete Incident
- Search Incident
- Filter by Severity
- Filter by Status

---

## User Management

- Add User
- Edit User
- Delete User
- Role Management

---

## Risk Assessment

- Risk Register
- Risk Score
- Impact Analysis
- Likelihood Assessment

---

## Reports

- Incident Report
- Risk Report
- PDF Export

---

## Audit Logs

- User Login
- Incident Activities
- System Activities

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|----------|
| Python 3.13 | Backend |
| Flask | Web Framework |
| SQLite | Database |
| Bootstrap 5 | UI |
| HTML5 | Frontend |
| CSS3 | Styling |
| JavaScript | Dynamic UI |
| Chart.js | Dashboard Charts |
| Font Awesome | Icons |

---

# 📁 Project Structure

```
CyberSecurity-IRMS/

│

├── app.py

├── config.py

├── requirements.txt

├── cybersecurity.db

│

├── database/

│   ├── database.py

│   └── schema.sql

│

├── static/

│   ├── css/

│   │   └── dashboard.css

│   │

│   ├── js/

│   │   └── dashboard.js

│   │

│   └── images/

│

├── templates/

│   ├── base.html

│   ├── login.html

│   ├── dashboard.html

│   ├── incidents.html

│   ├── users.html

│   ├── reports.html

│   ├── policies.html

│   └── risk.html

│

├── reports/

├── logs/

└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/cyber-security-irms.git
```

---

## Open Project

```bash
cd cyber-security-irms
```

---

## Install Requirements

```bash
pip install -r requirements.txt
```

---

## Initialize Database

```python
from database.database import initialize_database

initialize_database()
```

---

## Run Application

```bash
python app.py
```

---

Open Browser

```
http://127.0.0.1:5000
```

---

# 🔑 Default Login

Username

```
admin
```

Password

```
admin123
```

---

# 📊 Dashboard Modules

- Incident Statistics
- Security Alerts
- Threat Intelligence
- Weekly Trend
- Severity Distribution
- System Health
- Risk Assessment
- User Activity

---

# 📚 Database Tables

- users
- incidents
- risks
- policies
- reports
- audit_logs

---

# 🔒 Security Features

- Login Authentication
- Session Management
- Role-based Access (Planned)
- Audit Logs
- Password Hashing (Recommended)
- SQL Parameterized Queries

---

# 📈 Future Enhancements

- Email Notifications
- SMS Alerts
- Two-Factor Authentication
- SIEM Integration
- Wazuh Integration
- ELK Stack Integration
- CVE API Integration
- VirusTotal API
- IP Reputation Lookup
- Dark Mode
- Multi-user Support
- REST API
- Docker Deployment

---

# 📸 Screenshots

Add screenshots here:

```
docs/dashboard.png

docs/login.png

docs/incidents.png
```

---

# 👨‍💻 Developed By

**Name:** Gurpreet Singh

**Course:** Master of Computer Applications (MCA)

**Specialization:** Cyber Security

**Project:** Cyber Security Incident Response Management System

---

# 📄 License

This project is developed for educational purposes as part of an MCA Cyber Security Final Year Project.

---

# ⭐ Acknowledgements

- Python
- Flask
- Bootstrap
- SQLite
- Chart.js
- Font Awesome

---

# 📧 Contact

Email:

```
admin@cybersecurity.com
```

---

# 🎓 Academic Use

This project is intended for educational purposes and demonstrates cybersecurity incident response management concepts using modern web technologies.

---

## Version

```
Version 1.0
```

---

## Status

```
✔ Development Completed

✔ Dashboard Implemented

✔ Login Implemented

✔ Database Implemented

✔ Ready for Enhancement
```