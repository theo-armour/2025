import os

# Create a directory for the files if it doesn't exist
directory = "january_files"
if not os.path.exists(directory):
    os.makedirs(directory)

# Loop through each day of January 2025
for day in range(1, 32):
    filename = f"2025-01-{day:02d}.md"
    filepath = os.path.join(directory, filename)
    with open(filepath, 'w') as file:
        file.write(f"# {filename}\n")