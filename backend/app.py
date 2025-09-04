from flask import Flask
from flask_cors import CORS
from models import db
from routes import api
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)  # Enable CORS for all routes
db.init_app(app)

with app.app_context():
    db.create_all()  # Create database tables

app.register_blueprint(api, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)
