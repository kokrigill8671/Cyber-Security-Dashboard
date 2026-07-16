PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS audit_logs;
DROP TABLE IF EXISTS reports;
DROP TABLE IF EXISTS risks;
DROP TABLE IF EXISTS incidents;
DROP TABLE IF EXISTS policies;
DROP TABLE IF EXISTS users;

----------------------------------------------------
-- USERS
----------------------------------------------------

CREATE TABLE users (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    full_name TEXT NOT NULL,

    username TEXT UNIQUE NOT NULL,

    email TEXT UNIQUE NOT NULL,

    password TEXT NOT NULL,

    role TEXT NOT NULL,

    department TEXT,

    status TEXT DEFAULT 'Active',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

----------------------------------------------------
-- INCIDENTS
----------------------------------------------------

CREATE TABLE incidents (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    incident_id TEXT UNIQUE,

    title TEXT NOT NULL,

    category TEXT NOT NULL,

    severity TEXT NOT NULL,

    status TEXT NOT NULL,

    description TEXT,

    source_ip TEXT,

    destination_ip TEXT,

    affected_system TEXT,

    reported_by INTEGER,

    assigned_to INTEGER,

    resolution TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP,

    FOREIGN KEY(reported_by) REFERENCES users(id),

    FOREIGN KEY(assigned_to) REFERENCES users(id)

);

----------------------------------------------------
-- RISK ASSESSMENT
----------------------------------------------------

CREATE TABLE risks (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    asset TEXT NOT NULL,

    threat TEXT NOT NULL,

    vulnerability TEXT,

    likelihood INTEGER,

    impact INTEGER,

    risk_score INTEGER,

    mitigation TEXT,

    owner INTEGER,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(owner) REFERENCES users(id)

);

----------------------------------------------------
-- SECURITY POLICIES
----------------------------------------------------

CREATE TABLE policies (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    policy_name TEXT,

    version TEXT,

    description TEXT,

    owner TEXT,

    effective_date DATE,

    review_date DATE,

    status TEXT

);

----------------------------------------------------
-- REPORTS
----------------------------------------------------

CREATE TABLE reports (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    report_name TEXT,

    report_type TEXT,

    generated_by INTEGER,

    generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    file_path TEXT,

    FOREIGN KEY(generated_by) REFERENCES users(id)

);

----------------------------------------------------
-- AUDIT LOGS
----------------------------------------------------

CREATE TABLE audit_logs (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    user_id INTEGER,

    action TEXT,

    module TEXT,

    ip_address TEXT,

    log_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(user_id) REFERENCES users(id)

);

----------------------------------------------------
-- DEFAULT ADMIN
----------------------------------------------------

INSERT INTO users(

full_name,

username,

email,

password,

role,

department

)

VALUES(

'System Administrator',

'admin',

'admin@cybersecurity.com',

'admin123',

'Administrator',

'SOC'

);

----------------------------------------------------
-- SAMPLE INCIDENTS
----------------------------------------------------

INSERT INTO incidents(

incident_id,

title,

category,

severity,

status,

description,

source_ip,

destination_ip,

affected_system,

reported_by,

assigned_to

)

VALUES

(

'INC-1001',

'Malware Infection',

'Malware',

'Critical',

'Open',

'Windows workstation infected by malware.',

'192.168.1.25',

'192.168.1.10',

'Finance-PC-01',

1,

1

),

(

'INC-1002',

'Phishing Email',

'Email',

'High',

'Investigating',

'Suspicious email reported by employee.',

'203.45.88.12',

'192.168.1.50',

'Mail Server',

1,

1

),

(

'INC-1003',

'Unauthorized Login',

'Authentication',

'Medium',

'Resolved',

'Multiple failed login attempts detected.',

'185.32.10.11',

'192.168.1.20',

'VPN Gateway',

1,

1

);

----------------------------------------------------
-- SAMPLE RISKS
----------------------------------------------------

INSERT INTO risks(

asset,

threat,

vulnerability,

likelihood,

impact,

risk_score,

mitigation,

owner

)

VALUES

(

'Web Server',

'SQL Injection',

'Outdated Application',

5,

5,

25,

'Update software and deploy WAF.',

1

),

(

'Email Server',

'Phishing',

'Weak Email Filtering',

4,

5,

20,

'Enable Advanced Email Protection.',

1

);

----------------------------------------------------
-- SAMPLE POLICIES
----------------------------------------------------

INSERT INTO policies(

policy_name,

version,

description,

owner,

effective_date,

review_date,

status

)

VALUES

(

'Password Policy',

'2.0',

'Strong password requirements.',

'SOC Team',

'2026-01-01',

'2027-01-01',

'Active'

),

(

'Incident Response Policy',

'1.5',

'Standard incident handling procedure.',

'SOC Team',

'2026-01-15',

'2027-01-15',

'Active'

);

----------------------------------------------------
-- SAMPLE REPORT
----------------------------------------------------

INSERT INTO reports(

report_name,

report_type,

generated_by,

file_path

)

VALUES(

'Monthly Security Report',

'PDF',

1,

'reports/monthly_report.pdf'

);

----------------------------------------------------
-- SAMPLE AUDIT LOG
----------------------------------------------------

INSERT INTO audit_logs(

user_id,

action,

module,

ip_address

)

VALUES

(

1,

'User Login',

'Authentication',

'127.0.0.1'

),

(

1,

'Created Incident',

'Incident Management',

'127.0.0.1'

);