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
    
    # Tạo nút mở Mini App trong Telegram
    keyboard = telebot.types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=False)
    web_app = telebot.types.WebAppInfo(MINI_APP_URL)
    btn1 = telebot.types.KeyboardButton("🎮 Mở Mini App Khai Thác Vàng", web_app=web_app)
    keyboard.add(btn1)
    
    bot.send_message(
        message.chat.id,
        f"Chào bạn {message.from_user.first_name}! 👋\n\nNhấp vào nút dưới để mở Mini App trong Telegram nhé!",
        reply_markup=keyboard
    )

if __name__ == '__main__':
    print("Bot đang chạy...")
    bot.polling(none_stop=True)
