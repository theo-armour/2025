import os
import pyttsx3
import random
import time

def speak_random_line_every_minute(filename):
    # Get the file path relative to this script, ensuring we read the correct file
    script_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(script_dir, filename)

    # Initialize the TTS engine
    engine = pyttsx3.init()

    engine.setProperty('rate', 120)     # Speed of speech (default ~200)
    engine.setProperty('volume', 0.2)   # Volume level (0.0 to 1.0)
    voices = engine.getProperty('voices')

    # Read lines from file
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # Clean and filter out empty lines
    lines = [line.strip() for line in lines if line.strip()]

    if not lines:
        print("The file has no valid lines.")
        return

    print("Starting to speak one random line every minute. Press Ctrl+C to stop.")

    try:
        while True:
            chosen_voice = random.choice(voices)
            engine.setProperty('voice', chosen_voice.id)  # Select a voice

            chosen_line = random.choice(lines)
            print(chosen_line)
            engine.say("hello " + chosen_line)
            engine.runAndWait()

            # Wait 60 seconds
            time.sleep(60)

    except KeyboardInterrupt:
        print("\nExiting program...")

if __name__ == '__main__':
    speak_random_line_every_minute('input.txt')
