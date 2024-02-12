#!/usr/bin/env python3

from flask import Flask, request, make_response, jsonify
from flask_migrate import Migrate
from datetime import timedelta
from views import *


from models import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False


migarate = Migrate(app, db)

db.init_app(app)

app.register_blueprint(blog_bp)
app.register_blueprint(comment_bp)

@app.route("/")
def home():
    return "<p>Welcome to Life on a Rock API!</p>"

if __name__ == '__main__':
    app.run(port=5555, debug=True)