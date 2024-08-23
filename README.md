# Job_Board

This repository contains the main project files for the Job_Board application, including two submodules: `Web_Scraper_v1` and `tech_job_api`.

## Cloning the Repository

To clone this repository along with its submodules, follow these steps:

1. Open your terminal or command prompt.

2. Use the following command to clone the repository with all its submodules:

   ```bash
   git clone --recurse-submodules https://github.com/your-username/Job_Board.git
   ```

   Replace `your-username` with your GitHub username.

3. Navigate to the cloned repository:

   ```bash
   cd Job_Board
   ```

4. Ensure all submodules are up-to-date by running:

   ```bash
   git submodule update --init --recursive
   ```

## Updating Submodules

If you need to update the submodules to their latest versions, run:

```bash
git submodule update --remote --merge
```
