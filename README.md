## Automation Task

We would like you to complete a small task to demonstrate your technical understanding of automation. You are not expected to spend too much time on this, just between 45 mins to 1 hour, although it is not a timed task. We will then need this to be committed to a git repo.  


**Automate the below scenarios, taking screenshots at the end.**
    

1. - Go to the UK home page- www.directferries.co.uk
   - Navigate to the ‘Special Offers’ page
   - Change the language of the site to French

---

2. - Go to the UK home page - www.directferries.co.uk
   - Navigate to the ‘Special Offers’ page 
   - Change the language of the site to Italian

---
3. - Go to the UK My Account page - https://account.directferries.com/?culture=en-GB
   - Log into My Account using the following credentials:
      - qatesting@directferries.com
      - DFP164826683
   - Confirm on the first page (My Booking) that there is:
      - 2 passengers and 1 vehicle for the outbound sailing 
      - 1 passenger and 1 vehicle for the return sailing
   - Navigate to view the details of the outbound sailing
      - Vehicle is showing as Abarth 500
      - Lead passenger name is showing as 'TestOne TestRD'
      - Other passenger name is showing as 'TestTwo TestRD'



********************  To Run The Project ***********************

1. Clone the repository by typing  " git clone <repository_address>  on your Command line interface 
2. Run the project by typing "<npm install>" and <npm run test> on the project directory (i.e where the project is saved on your computer) Command line interface

<Note>
There are false negatives with the first two features due to a problem on the web page reference to the documentation to the issue can be found
<https://testcafe.io/documentation/402752/reference/test-api/selector/filterhidden>

</Note>