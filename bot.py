import os
import json
import telebot
from dotenv import load_dotenv

load_dotenv()

TOKEN = os.getenv('TELEGRAM_BOT_TOKEN')
MINI_APP_URL = os.getenv('MINI_APP_URL')
bot = telebot.TeleBot(TOKEN)

USER_DATA_FILE = 'user_data.json'

def load_user_data():
    if os.path.exists(USER_DATA_FILE):
        with open(USER_DATA_FILE, 'r') as f:
            return json.load(f)
    return {}

def save_user_data(data):
    with open(USER_DATA_FILE, 'w') as f:
        json.dump(data, f)

@bot.message_handler(commands=['start'])
def send_welcome(message):
    user_id = str(message.from_user.id)
    user_data = load_user_data()
    
    if user_id not in user_data:
        user_data[user_id] = {'points': 0}
        save_user_data(user_data)
    
    # Xóa nút cũ, chỉ hiện lời chào
    bot.send_message(
        message.chat.id,
        f"Chào bạn {message.from_user.first_name}! 👋\n\nNhấp vào nút 🎮 Khai Thác Vàng ở góc phải bàn phím để mở Mini App nhé!"
    )

if __name__ == '__main__':
    print("Bot đang chạy...")
    bot.polling(none_stop=True)
