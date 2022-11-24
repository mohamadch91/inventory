
@developer : https://github.com/mohamadch91

# Inventory and Gap Analysis System

This is a inventory and gap analysis system for a WHO .
[inventory and gap analysis system](invgap.org)
## WHO:
WHO uses this system for inventory and gap analysis of all countries health facilities.

## Countries:
Countries uses this system for inventory and gap analysis in ministry of health:
- [Ukraine](https://ukr.invgap.org/)
- [Philippines](https://phl.invgap.org/)
- [Timor Leste](https://tls.invgap.org/)
- [Jordan](https://jor.invgap.org/)




# Dependencies
- Ubuntu 20.04 LTS
- Python 3.6
- Django 3.0.3
- Django Rest Framework 3.11.0
- Node 14.4.0
- NPM 6.14.5
- PostgreSQL 12.3
## Install dependencies
### Ubuntu 20.04 LTS
```bash
sudo apt-get update
sudo apt-get install python3.6 python3-pip python3.6-dev postgresql postgresql-contrib libpq-dev
```
### Django
```bash
pip3 install django
```
### Node
```bash
sudo apt install  node npm  
```
### PostgreSQL
```bash
sudo apt install postgresql postgresql-contrib
```
## Setup
### Clone the repository
```bash
git clone https://github.com/mohamadch91/inventory.git
```
### Done
after complete installation 
1. go to backend folder and install
2. then go to front end folder and install

# Deployment

## Backend

### go to backend folder
```bash
cd inventory-Backend
```
then use following command for run server
```bash
screen python3 manage.py runserver 0.0.0.0:8000
```

## Frontend

### go to frontend folder
```bash
cd inventory-front-end
```
then use following command for run server
```bash
pm2 serve build 3000 --spa
```

