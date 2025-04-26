from flask import Flask, render_template, send_from_directory # type: ignore
import os
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('dashboard.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/index')
def dashboard():
    return render_template('index.html')


download_count = 0  # Global counter (temporary — we'll make it better later)

@app.route('/download-apk')
def download_apk():
    global download_count
    download_count += 1
    print(f"APK Downloaded {download_count} times!")  # Log to terminal (for now)
    
    apk_path = os.path.join(app.root_path, 'static', 'apk')
    return send_from_directory(directory=apk_path, path='VocalMedApp.apk', as_attachment=True)


if __name__ == '__main__':
    app.run(debug=True)
