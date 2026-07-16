"""
===========================================================
Cyber Security Incident Response Management System
Database Module
===========================================================
"""

import sqlite3
import os
from contextlib import contextmanager

# ----------------------------------------------------------
# Database Path
# ----------------------------------------------------------

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATABASE = os.path.join(BASE_DIR, "cybersecurity.db")
SCHEMA = os.path.join(BASE_DIR, "database", "schema.sql")


# ----------------------------------------------------------
# Database Connection
# ----------------------------------------------------------

def get_db():

    conn = sqlite3.connect(DATABASE)

    conn.row_factory = sqlite3.Row

    conn.execute("PRAGMA foreign_keys = ON")

    return conn


# ----------------------------------------------------------
# Context Manager
# ----------------------------------------------------------

@contextmanager
def db_cursor():

    conn = get_db()

    cursor = conn.cursor()

    try:

        yield cursor

        conn.commit()

    except Exception:

        conn.rollback()

        raise

    finally:

        conn.close()


# ----------------------------------------------------------
# Initialize Database
# ----------------------------------------------------------

def initialize_database():

    if not os.path.exists(SCHEMA):

        raise FileNotFoundError(

            f"Schema file not found: {SCHEMA}"

        )

    conn = get_db()

    with open(SCHEMA, "r", encoding="utf-8") as f:

        conn.executescript(f.read())

    conn.commit()

    conn.close()

    print("Database initialized successfully.")


# ----------------------------------------------------------
# Execute INSERT / UPDATE / DELETE
# ----------------------------------------------------------

def execute(query, params=()):

    with db_cursor() as cursor:

        cursor.execute(query, params)

        return cursor.lastrowid


# ----------------------------------------------------------
# Fetch One Record
# ----------------------------------------------------------

def fetch_one(query, params=()):

    conn = get_db()

    cursor = conn.cursor()

    cursor.execute(query, params)

    row = cursor.fetchone()

    conn.close()

    return row


# ----------------------------------------------------------
# Fetch Multiple Records
# ----------------------------------------------------------

def fetch_all(query, params=()):

    conn = get_db()

    cursor = conn.cursor()

    cursor.execute(query, params)

    rows = cursor.fetchall()

    conn.close()

    return rows


# ----------------------------------------------------------
# User Login
# ----------------------------------------------------------

def authenticate(username, password):

    return fetch_one(

        """

        SELECT *

        FROM users

        WHERE username = ?

        AND password = ?

        """,

        (username, password)

    )


# ----------------------------------------------------------
# Dashboard Statistics
# ----------------------------------------------------------

def dashboard_statistics():

    conn = get_db()

    cursor = conn.cursor()

    cursor.execute(

        "SELECT COUNT(*) FROM incidents"

    )

    total = cursor.fetchone()[0]

    cursor.execute(

        """

        SELECT COUNT(*)

        FROM incidents

        WHERE status='Open'

        """

    )

    open_incidents = cursor.fetchone()[0]

    cursor.execute(

        """

        SELECT COUNT(*)

        FROM incidents

        WHERE status='Resolved'

        """

    )

    resolved = cursor.fetchone()[0]

    cursor.execute(

        """

        SELECT COUNT(*)

        FROM incidents

        WHERE severity='Critical'

        """

    )

    critical = cursor.fetchone()[0]

    conn.close()

    return {

        "total": total,

        "open": open_incidents,

        "resolved": resolved,

        "critical": critical

    }


# ----------------------------------------------------------
# Incident CRUD
# ----------------------------------------------------------

def get_all_incidents():

    return fetch_all(

        """

        SELECT *

        FROM incidents

        ORDER BY created_at DESC

        """

    )


def get_incident(incident_id):

    return fetch_one(

        """

        SELECT *

        FROM incidents

        WHERE id=?

        """,

        (incident_id,)

    )


def delete_incident(incident_id):

    execute(

        """

        DELETE

        FROM incidents

        WHERE id=?

        """,

        (incident_id,)

    )


# ----------------------------------------------------------
# Risk Assessment
# ----------------------------------------------------------

def get_risks():

    return fetch_all(

        """

        SELECT *

        FROM risks

        ORDER BY risk_score DESC

        """

    )


# ----------------------------------------------------------
# Policies
# ----------------------------------------------------------

def get_policies():

    return fetch_all(

        """

        SELECT *

        FROM policies

        ORDER BY policy_name

        """

    )


# ----------------------------------------------------------
# Reports
# ----------------------------------------------------------

def get_reports():

    return fetch_all(

        """

        SELECT *

        FROM reports

        ORDER BY generated_at DESC

        """

    )


# ----------------------------------------------------------
# Audit Logs
# ----------------------------------------------------------

def get_logs():

    return fetch_all(

        """

        SELECT *

        FROM audit_logs

        ORDER BY log_time DESC

        """

    )


# ----------------------------------------------------------
# Health Check
# ----------------------------------------------------------

def test_connection():

    try:

        conn = get_db()

        conn.execute("SELECT 1")

        conn.close()

        return True

    except Exception:

        return False


# ----------------------------------------------------------
# Run Directly
# ----------------------------------------------------------

if __name__ == "__main__":

    initialize_database()

    print("Connection:", test_connection())

    print("Dashboard:", dashboard_statistics())