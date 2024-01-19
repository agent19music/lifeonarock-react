from models import db, User,TokenBlocklist
from flask import request, jsonify, Blueprint
from werkzeug.security import check_password_hash

auth_bp = Blueprint('auth_bp', __name__)