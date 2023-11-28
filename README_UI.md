The approach:
Tool:
  1.1. Tool: Playwight, Cucumber
  1.2. Langguage: Javascript
  1.3 Multiple report

HOW TO RUN SOURCE CODE:
- Run from local: 
  + Step 1: clone source from github ``
  + Step 2: Open source by any IDE such as: VSCode
  + Step 3: trying following:
       _ Open new terminal from VSCode `npm install`
       _ Open new terminal from VSCode `npm run test`
    Notes: If you wanna run some test, we should change the tag inside `*.feature` file: ( Currently, i configurated tag == 'fulltest', if you want to run any kind of scenarios , you just change tag to 'test', after that follow step 3 above)


Trouble:
1. I don't implement way to bypass CAPCHA for the first time launching browser and access to amazon.com. So we have to input manually CAPCHA to bypass it
2. For invalid email/pass, Amzone will displays CAPCHA page to protect your account ( just happened with automation). So we have to input manually
3. Sometime, Amazone will redirect to homepage with ref url ( this UI is not main homepage). So we re-click on logo AMAZON by hand or re-run script, it will display correct original HomePage ( i can handle this one but limittation time)