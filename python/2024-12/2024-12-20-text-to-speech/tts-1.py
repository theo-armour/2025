import os
import pyttsx3
import random
import time


def text_to_speech_random_line(filename):
    # Get the absolute path of the current script's directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(script_dir, filename)

    # Initialize the TTS engine
    engine = pyttsx3.init()
    # engine.setProperty ('rate', 120)
    engine.say ('---   ')
    engine.runAndWait()

    # Read all lines from the file
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # Strip whitespace and remove any empty lines
    lines = [line.strip() for line in lines if line.strip()]

    # Choose one line at random
    if lines:
        chosen_line = random.choice(lines)
        # chosen_line = lines[3]
        print(chosen_line)
    else:
        print("The file is empty or has no valid lines to read.")
        return

    # Speak the chosen line
    # engine.say(" ")
    engine.say(chosen_line)
    engine.runAndWait()

if __name__ == '__main__':
    text_to_speech_random_line('input.txt')
