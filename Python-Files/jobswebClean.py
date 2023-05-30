import pandas as pd
import re
from datetime import datetime

# Read csv file into a dataframe
df = pd.read_csv('jobswebdata.csv', encoding='utf-8')

# Remove duplicates
df.drop_duplicates(inplace=True)

# Remove rows with missing values
df.dropna(inplace=True)

# drop column
df.drop(['Link'], axis=1, inplace=True)

# Strip whitespace
df['Title'] = df['Title'].str.strip()
df['Date'] = df['Date'].str.strip()
df['Company'] = df['Company'].str.strip()

# Convert "Title" column to lowercase
df['Title'] = df['Title'].str.lower()
df['Company'] = df['Company'].str.lower()

# Remove special character sequence from "Title" & Company column using translate()
df['Title'] = df['Title'].apply(lambda x: re.sub(r'[\W_]+', ' ', x))
df['Company'] = df['Company'].apply(lambda x: re.sub(r'[\W_]+', ' ', x))

# Convert date column to datetime objects
df['Date'] = pd.to_datetime(df['Date'], format='%d/%b/%Y')

# Format date column to American format
df['Date'] = df['Date'].apply(lambda x: x.strftime('%m/%d/%Y'))

# Save dataframe to csv file
df.to_csv('jobswebClean.csv', index=False)
