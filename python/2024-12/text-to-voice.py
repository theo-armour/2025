import pyttsx3
import sys


class TextToVoice:
    def __init__(self):
        self.engine = pyttsx3.init()
        self.setup_voice()

    def setup_voice(self):
        self.engine.setProperty('rate', 150)    # Speed of speech
        self.engine.setProperty('volume', 0.9)  # Volume level
        voices = self.engine.getProperty('voices')
        self.engine.setProperty('voice', voices[1].id)  # Index 1 for female voice

    def convert_text(self, text):
        self.engine.say(text)
        self.engine.runAndWait()

    def convert_file(self, filename):
        try:
            with open(filename, 'r', encoding='utf-8') as file:
                text = file.read()
                print(text)
                self.convert_text(text)
        except FileNotFoundError:
            print(f"Error: File '{filename}' not found.")
        except Exception as e:
            print(f"Error: {str(e)}")

def main():
    app = TextToVoice()
    if len(sys.argv) > 1:
        app.convert_file(sys.argv[1])
    else:
        print("Please provide a text file as argument.")

if __name__ == "__main__":
    main()