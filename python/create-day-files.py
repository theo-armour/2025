import os

# Create a directory for the files if it doesn't exist
directory = "2025-02-february"

if not os.path.exists(directory):
    os.makedirs(directory)

# Loop through each day of <<month> 2025

for day in range(1, 29):
    filename = f"2025-02-{day:02d}.md"
    filepath = os.path.join(directory, filename)
    with open(filepath, 'w') as file:
        file.write(f"# {filename}\n")