# MyMoney

## 카카오 플친 프로젝트

### Database Scheme

User
* uid: Number (PK)
* uname: String (Not Null, Unique)

Account
* aid: Number (PK)
* uid: Number (FK from User, Not Null)
* real_name: String (Nullable)
* bid: Number (FK from Bank, Nullable)
* account: String (Not Null)

Bank
* bid: Number (PK)
* name: String (Unique, Not Null)

Participate
* uid: Number (FK from User, Not Null)
* nid: Number (FK from User, Not Null)

Activity
* nid: Number (PK)
* name: String (Not Null)

Current
* nid: Number (PK, Not Null)

Log
* nid: Number (FK from Activity, Not Null)
* uid: Number (FK from User, Not Null)
* money: Number (Not Null)
* time: String (Not Null)

Debt
* nid: Number (FK from Activity, Not Null)
* src_nid: Number (FK from User, Not Null)
* des_nid: Number (FK from User, Not Null)
* money: Number (Positive, Not Null)

