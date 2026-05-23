const SCENARIOS = [
    // --- LEVEL A1/A2 FOUNDATION ---
    {
        id: "c3",
        category: "Retention / Billing",
        title: "Straightforward Service Move Request",
        difficulty: "A1/A2 Foundation",
        description: "Un cliente nativo solicita una cancelación simple porque se muda. El agente debe mantener estructuras limpias, directas y libres de jerga corporativa compleja.",
        vocabulary: {
            "coverage": { meaning: "The area where a company can provide its signal or service.", examples: ["Our network has great coverage in this city.", "I am moving to a rural area with no coverage."] },
            "balance": { meaning: "The amount of money you owe or have in your account.", examples: ["Your remaining account balance is zero.", "Please pay the outstanding balance today."] },
            "to waive": { meaning: "To remove a fee or charge so the customer does not have to pay it.", examples: ["We can waive the cancellation fee for you.", "The manager decided to waive the late delivery charge."] },
            "drop-off": { meaning: "The act of taking something to a specific place and leaving it there.", examples: ["The equipment drop-off location is open until 5 PM.", "Where is the nearest drop-off point for this router?"] }
        },
        steps: [
            {
                customer: "Hi there. I need to cancel my internet service by the end of this month. I'm moving to a small town up north, and I already checked your map—you guys don't have any coverage up there.",
                options: [
                    { text: "I can certainly help you with that cancellation. I am sorry we do not have service in your new town. Let's check your account details to start the process. May I have your full name, please?", points: 10, feedback: "Excellent. Uses short, clear sentences and simple words. Directly addresses the customer's request without unnecessary corporate jargon." },
                    { text: "Please be advised that before initiating a permanent termination protocol, I must cross-reference our secondary geolocation database to verify the lack of infrastructure availability. Provide your credentials.", points: 7, feedback: "Too complex and mechanical. Words like 'termination protocol', 'cross-reference', and 'infrastructure availability' overload the conversation." },
                    { text: "Oh, that is so sad! Don't move there! Small towns are so boring. Why don't you stay in your current house forever so you can keep using our amazing internet?", points: 1, feedback: "Absurd and highly unprofessional. It tells the customer how to live their life and completely ignores the cancellation request." }
                ]
            },
            {
                customer: "My name is Thomas Vance. I want the final day of service to be the 31st. I don't want to get billed for the next month at all.",
                options: [
                    { text: "Thank you, Mr. Vance. I see your account. I will set the service to stop on the 31st. This means your regular monthly billing will stop on that day too.", points: 10, feedback: "Perfect. Reassuring, clear, and confirms the exact date with basic, easy-to-understand billing language." },
                    { text: "I am modifying the system parameters to reflect a hard disconnect on the 31st. This will automatically truncate the recurring cycle generation engine for the subsequent month.", points: 7, feedback: "Too technical. Explaining the 'system parameters' and 'recurring cycle generation engine' is backend talk that confuses the interaction." },
                    { text: "Sure thing! I can just delete your credit card from our system right now. If we don't have your card, we can't bill you! Problem solved!", points: 2, feedback: "Dangerous and wrong. Removing a payment method does not stop a legal contract or billing cycle; it just creates unpaid past-due debt." }
                ]
            },
            {
                customer: "Perfect. Will there be an early termination fee? I remember signing a one-year agreement a few months ago, but since you don't even offer service at my new place, it feels unfair to pay a penalty.",
                options: [
                    { text: "You are correct about the agreement. However, because you are moving to an area without our service, we will waive that fee. You will not pay a penalty.", points: 10, feedback: "Masterful mitigation. Explains the exception clearly and promises the waiver using direct language ('we will waive that fee', 'you will not pay a penalty')." },
                    { text: "Per section 9 of your digital contract, an early exit triggers an automated penalty ledger item. However, I can apply a non-coverage financial liability override to nullify the balance.", points: 7, feedback: "Very robotic. 'Penalty ledger item' and 'non-coverage financial liability override to nullify' are overly complex legalistic phrases." },
                    { text: "Oh, contracts don't matter at all! They are just pieces of paper. Let's just pretend you never signed it and make up a funny story for my boss!", points: 1, feedback: "Absurd and non-compliant. Completely disregards legal contract standards and company rules." }
                ]
            },
            {
                customer: "That is a huge relief, thank you. What do I need to do with the modem and the cables? Do I keep them or ship them back?",
                options: [
                    { text: "You will need to return the modem and the power cable. You can drop them off at any of our local stores. Please do this within 15 days after the service stops.", points: 10, feedback: "Clear and actionable. Uses simple words like 'drop them off' and sets a clear 15-day timeline without dense instructions." },
                    { text: "The company-provisioned CPE hardware unit must be successfully logged into our logistics system via an authorized retail fulfillment center within a 15-day window.", points: 7, feedback: "Heavy use of jargon. Words like 'company-provisioned CPE hardware' and 'logistics system via an authorized retail fulfillment center' are unnecessarily complex." },
                    { text: "You can keep them! Put the modem in your garden as a flower pot, or give it to your neighbors as a gift. We don't want that old plastic back.", points: 2, feedback: "Highly unprofessional. Telling a customer to throw away or reuse unreturned company equipment leads to unrecovered equipment fees." }
                ]
            },
            {
                customer: "Okay, there's a store right down the street from my current office, so I can easily drop them off there next month. Will I receive a confirmation email about this cancellation?",
                options: [
                    { text: "Yes, Mr. Vance. I am sending a confirmation email to you right now. It shows your final date of service and the details for the equipment return.", points: 10, feedback: "Excellent closing preparation. Validates the customer's plan and confirms the immediate action using simple, transparent terms." },
                    { text: "An automated system manifest has been queued. The backend server will broadcast a confirmation receipt containing your digital disconnection token to your inbox shortly.", points: 7, feedback: "Exposes unnecessary system processes. Terms like 'system manifest has been queued' and 'digital disconnection token' sound robotic." },
                    { text: "No, we don't send emails anymore because they are bad for the environment. Instead, I will look at the sky and send you positive thoughts on the 31st!", points: 1, feedback: "Completely ridiculous and unprofessional. Refusing to send a standard email confirmation with an absurd excuse breaks basic call center protocols." }
                ]
            },
            {
                customer: "I just got the email, everything looks correct. Thank you for making this process so quick and easy. I appreciate your help.",
                options: [
                    { text: "You are very welcome, Mr. Vance. Your account is all set to close on the 31st. Thank you for being our customer, and good luck with your move!", points: 10, feedback: "Perfect C1 professional tone modulated to a clear foundation structure. Friendly, efficient, wraps up the call cleanly, and includes a nice closing wish." },
                    { text: "The interaction has achieved a satisfactory status. This ticket is now closed in our CRM database. You are authorized to disconnect from this channel.", points: 7, feedback: "Terribly cold, sterile, and mechanical. Treats the customer like a number and reads off system statuses instead of saying a polite goodbye." },
                    { text: "Wait, don't hang up! Since we are friends now, can I have your new address so I can come visit you next month and sleep on your couch?", points: 1, feedback: "Severe violation of privacy and boundaries. Asking to visit a customer or stay at their home is completely unacceptable and crosses all professional lines." }
                ]
            }
        ]
    },
    {
  "id": "c6",
  "category": "Travel & Booking",
  "title": "Changing a Flight Date Due to an Emergency",
  "difficulty": "A2 Foundation",
  "description": "Un cliente nativo llama para cambiar la fecha de su vuelo debido a una situación imprevista. El agente debe ser evaluado en su capacidad para resolver el problema de forma rápida y empática, manteniendo sus respuestas con estructuras gramaticales limpias y evitando la jerga compleja del sistema de reservas de aerolíneas.",
  "vocabulary": {
    "booking confirmation": {
      "meaning": "A document or code that proves a travel reservation is official and paid for.",
      "examples": [
        "Please show your booking confirmation at the desk.",
        "I received my booking confirmation in my email."
      ]
    },
    "change fee": {
      "meaning": "An extra amount of money you must pay to modify the date or time of your ticket.",
      "examples": [
        "The airline charges a fifty-dollar change fee for economy tickets.",
        "Can you waive the change fee because of my situation?"
      ]
    },
    "fare difference": {
      "meaning": "The price variation between your original ticket and the new ticket you want to buy.",
      "examples": [
        "If the new flight is more expensive, you must pay the fare difference.",
        "There is no fare difference for the morning flight."
      ]
    },
    "carry-on bag": {
      "meaning": "A small piece of luggage that you can bring inside the airplane cabin with you for free or a small cost.",
      "examples": [
        "Make sure your carry-on bag fits under the seat.",
        "Is a carry-on bag included in this basic rate?"
      ]
    },
    "window seat": {
      "meaning": "A passenger seat next to the side window of the airplane.",
      "examples": [
        "I prefer a window seat so I can see the clouds.",
        "Is there a window seat available on the next flight?"
      ]
    },
    "boarding pass": {
      "meaning": "The official document or digital QR code that allows a passenger to get onto the airplane.",
      "examples": [
        "You need to print your boarding pass at the airport kiosk.",
        "I have my digital boarding pass on my smartphone."
      ]
    }
  },
  "steps": [
    {
      "customer": "Hi. I'm supposed to fly to Chicago tomorrow, but my sister just got into a bad car accident. I need to push my trip back to next week. Can you look at my booking confirmation and see if we can change it?",
      "options": [
        {
          "text": "I am so sorry to hear about your sister. I hope she is okay. I can certainly help you change your flight date right now. May I have your name and confirmation code, please?",
          "points": 10,
          "roleInvertedPoints": 2,
          "feedback": "Excellent empathy and clear modulation. Validates the family emergency immediately and keeps the instructions direct and easy to follow."
        },
        {
          "text": "In order to modify an active reservation within the twenty-four hour departure window, I must access our global distribution network to verify availability. State your flight credentials.",
          "points": 7,
          "roleInvertedPoints": 6,
          "feedback": "Too robotic. Words like 'modify an active reservation', 'global distribution network', and 'credentials' are overly complex for an A2 foundation context."
        },
        {
          "text": "Oh my god, a car accident? That is terrifying! Is there blood everywhere? Don't worry about the flight, let's look at photos of the crash online together!",
          "points": 1,
          "roleInvertedPoints": 10,
          "feedback": "Completely inappropriate and shocking. Asking graphic questions about an accident and ignoring the business request violates all safety and professional protocols."
        }
      ]
    },
    {
      "customer": "Thank you, I appreciate it. My name is Robert Evans and the code is X-Y-7-2-B. I want to leave next Tuesday morning instead if that's possible.",
      "options": [
        {
          "text": "Thank you, Mr. Evans. I see your plan here. I have a flight next Tuesday morning at 8:00 AM. Does that time work well for you?",
          "points": 10,
          "roleInvertedPoints": 2,
          "feedback": "Perfect. Acknowledges the data, gives a clear, direct choice for the new flight, and maintains a highly accessible language structure."
        },
        {
          "text": "Data confirmed. I am currently scanning the inventory manifest for next Tuesday's morning rotation. There is one open seat on flight 402 departing at 0800 hours. Confirm your authorization.",
          "points": 7,
          "roleInvertedPoints": 6,
          "feedback": "Reads like backend logs. Explaining 'scanning the inventory manifest' and using military time like '0800 hours' is unnecessarily technical."
        },
        {
          "text": "Robert, Tuesday is a bad luck day to fly! The stars say you shouldn't travel on Tuesdays. Let's change your flight to a magical spaceship on Friday instead!",
          "points": 2,
          "roleInvertedPoints": 10,
          "feedback": "Absurd. Offering completely unrealistic alternatives based on superstitions and astrology destroys professional credibility."
        }
      ]
    },
    {
      "customer": "Yes, 8:00 AM is perfect. Now, my original ticket said something about a $150 change fee for modifications. Is there any way you can waive that because of this emergency?",
      "options": [
        {
          "text": "Yes, Mr. Evans. Because this is a medical emergency for your family, I can remove that change fee for you completely. You will not have to pay that $150.",
          "points": 10,
          "roleInvertedPoints": 2,
          "feedback": "Masterful de-escalation. Clearly states the resolution and confirms the financial favor ('remove that change fee', 'you will not have to pay') without administrative friction."
        },
        {
          "text": "Standard tariff regulations mandate a penalty ledger item for late modifications. However, I can perform a medical contingency override to nullify the baseline transaction cost.",
          "points": 7,
          "roleInvertedPoints": 6,
          "feedback": "Too sterile and complex. Phrases like 'penalty ledger item' and 'medical contingency override to nullify' are overly dense legalistic speech."
        },
        {
          "text": "Sure! Let's just tell the computer that you are the president of the airline, and then the computer will give us all the flights for free forever!",
          "points": 1,
          "roleInvertedPoints": 10,
          "feedback": "Ridiculous and non-compliant. Suggesting a fraudulent manipulation to the system is a severe breach of company policy."
        }
      ]
    },
    {
      "customer": "Oh, that is wonderful news, thank you so much. But wait, what about the fare difference? Is the price of the new ticket exactly the same as my old one?",
      "options": [
        {
          "text": "The new flight is actually $30 cheaper than your old one. This means there is no extra cost for the ticket, and you don't owe any money today.",
          "points": 10,
          "roleInvertedPoints": 2,
          "feedback": "Excellent clarity. Instead of explaining credit vouchers or complex corporate ledger returns, it directly tells the customer they owe $0."
        },
        {
          "text": "The price matrix shows a negative variance of thirty dollars. This creates a residual credit value on the secondary ledger, meaning your immediate liability is completely clear.",
          "points": 7,
          "roleInvertedPoints": 6,
          "feedback": "Too industrial. Talking about 'negative variance' and 'residual credit value on the secondary ledger' confuses a simple zero-dollar balance situation."
        },
        {
          "text": "The new ticket costs one million dollars! But don't worry, you can pay us by giving me your car and your house right now over the phone!",
          "points": 2,
          "roleInvertedPoints": 10,
          "feedback": "Absurd distraction. Inventing an impossible price and asking for a customer's personal property is highly inappropriate and unprofessional."
        }
      ]
    },
    {
      "customer": "Excellent. Now, does this new ticket still include my carry-on bag and my window seat? I really need that extra space for my laptop during the flight.",
      "options": [
        {
          "text": "Yes, everything stays the same. I have selected a window seat for you on the new plane, and your carry-on bag is still included for free.",
          "points": 10,
          "roleInvertedPoints": 2,
          "feedback": "Clear, reassuring, and concise. Confirms both services are safe using standard, everyday words without exposing booking codes."
        },
        {
          "text": "The ancillary seat mapping assignment has been successfully cloned into the new aircraft hull template, and your luggage allowance token remains active in the backend profile.",
          "points": 7,
          "roleInvertedPoints": 6,
          "feedback": "Heavy backend speak. Explaining 'ancillary seat mapping assignment' and 'luggage allowance token cloned into the aircraft hull template' sounds robotic."
        },
        {
          "text": "No, on Tuesdays we don't have windows on our planes! The walls are completely solid metal, so you will have to fly in complete darkness!",
          "points": 1,
          "roleInvertedPoints": 10,
          "feedback": "Completely ridiculous. Telling a customer a fake, scary story about an airplane structure destroys trust and professional rapport."
        }
      ]
    },
    {
      "customer": "Perfect, I just received the email with the update. Will this same email work as my boarding pass at the gate next week, or do I need to print something else?",
      "options": [
        {
          "text": "The email is just your receipt. Next week, you can check in online 24 hours before the flight to get your official boarding pass on your phone or at the airport.",
          "points": 10,
          "roleInvertedPoints": 2,
          "feedback": "Excellent professional closure for an A2 foundation level. Explains the exact next step clearly and prevents check-in confusion at the airport."
        },
        {
          "text": "Negative. This document is a transactional confirmation token. You must initiate a digital check-in sequence on our platform to generate the authorized QR code link.",
          "points": 7,
          "roleInvertedPoints": 6,
          "feedback": "Sterile closing response. Using terms like 'transactional confirmation token' and 'digital check-in sequence' sounds machine-generated."
        },
        {
          "text": "Yes, just show the security guards a drawing of a happy smiley face on a paper towel, and they will let you onto the plane immediately!",
          "points": 2,
          "roleInvertedPoints": 10,
          "feedback": "Absurd and dangerous advice. Suggesting that airport security checks can be bypassed with a joke drawing violates international aviation safety standards."
        }
      ]
    }
  ]
},
    // --- LEVEL B1 / B2 ---
    {
        id: "c4",
        category: "Retention / Billing",
        title: "Resolving a Disputed Automated Renewal",
        difficulty: "B1/B2 Technical",
        description: "Un cliente nativo llama muy molesto por un cobro automático anual. El agente debe de-escalar la llamada y explicar políticas de forma empática sin sonar como un robot.",
        vocabulary: {
            "hit with": { meaning: "Suddenly or unexpectedly forced to deal with a charge or an unpleasant situation.", examples: ["I open my app and find out I am hit with an unknown fee.", "The system hit the customer with a penalty by mistake."] },
            "auto-renewal": { meaning: "An automatic process where a subscription or contract continues and bills the user without needing manual approval.", examples: ["Please turn off the auto-renewal feature on my account.", "The text states that the plan has an active auto-renewal."] },
            "rip-off": { meaning: "An overcharged item or a transaction that is completely unfair or a scam.", examples: ["Paying a fifty-dollar fee for this basic tier is a total rip-off.", "The client wants a refund because he feels the price is a rip-off."] },
            "grandfathered price": { meaning: "A special old price that an old user keeps even after the official cost goes up for new users.", examples: ["Early subscribers keep their grandfathered price forever.", "If you cancel today, you will lose your grandfathered price."] },
            "refund": { meaning: "An amount of money that is given back to a user because they are not happy with a product or service.", examples: ["The system takes five days to process the full refund.", "I am demanding a total refund for this broken service."] },
            "chargeback": { meaning: "A formal dispute where a buyer asks their bank to reverse a payment made on a credit card.", examples: ["Filing a chargeback can cause the platform to freeze your profile.", "The customer threatens to initiate a chargeback with the bank."] },
            "grace period": { meaning: "Extra time given to complete an action, make a payment, or request a change without facing a penalty.", examples: ["There is a seven-day grace period to request a cancelation after the renewal.", "The system does not offer a grace period for late accounts."] },
            "waive": { meaning: "To officially remove a fee, rule, or penalty so that the user does not have to pay it.", examples: ["The manager can waive the activation fee for loyal clients.", "We are going to waive the penalty this time as a courtesy."] }
        },
        steps: [
            {
                customer: "Hi. I'm looking at my bank statement right now and I just got hit with a $299 charge from your company. This was an auto-renewal that I never authorized. This is a total rip-off and I want it taken off my card immediately.",
                options: [
                    { text: "I completely understand how shocking it is to see a surprise charge on your statement. Let's look into this $299 auto-renewal together right now so I can see what happened and help you resolve it. May I have your name, please?", points: 10, feedback: "Excellent de-escalation. Validates the shock, uses very clear language, and moves straight into action without hiding behind rigid rules." },
                    { text: "Per our standard Terms of Service, all electronic subscriptions generate automated billing entries unless a manual cancellation form is processed 30 days prior. Please state your full name for credentials.", points: 7, feedback: "Too mechanical and defensive. Reading the terms of service instantly makes the customer feel ignored and defensive." },
                    { text: "Oh my god, $299? That is horrible! Our billing department is so bad, they always steal money from people like that! Let's just block our company from your bank card together!", points: 1, feedback: "Highly unprofessional and dangerous. Agreeing that the company 'steals money' destroys brand trust and violates basic call center guidelines." }
                ]
            },
            {
                customer: "My name is Sarah Jenkins. Look, I remember buying this software last year for a special promotion of $99. Where on earth does a $299 price tag come from? I expect to keep my grandfathered price if you guys are going to keep billing me without asking!",
                options: [
                    { text: "Thank you, Ms. Jenkins. The $99 price was a special discount for your first year only. After the first year, the plan goes back to its regular price. However, I want to make this right. Let's check our options for a refund or a lower rate.", points: 10, feedback: "Perfect. Explains the difference between the promotion and the regular price clearly using simple words, while offering a proactive path forward." },
                    { text: "The introductory promo token applied to your profile has expired. The current system matrix automatically updates all legacy accounts to the standard premium market tariff upon cycle rotation.", points: 7, feedback: "Extremely robotic. Phrases like 'introductory promo token' and 'system matrix automatically updates to the standard premium market tariff' confuse the customer." },
                    { text: "Wow, $99 to $299 is crazy! I think our boss is just trying to get rich. Don't worry, Sarah, I can change the price of our entire company software to $1 for everyone today!", points: 2, feedback: "Absurd. Making false promises about changing corporate software pricing structure is a massive breach of policy and realism." }
                ]
            },
            {
                customer: "I don't care about regular prices, I haven't used this app in four months! I want a full refund right now. If you refuse to give me my money back, I am calling my bank to file a chargeback for an unauthorized payment.",
                options: [
                    { text: "I hear you, and I certainly want to avoid any long disputes with your bank. Since I can see you have not logged in for months, I am happy to request a special exception for a full refund today. It will take about 3 to 5 business days to clear.", points: 10, feedback: "Great handling of a chargeback threat. Uses the customer's inactive account history as a solid reason to grant the refund exception and states a clear timeline." },
                    { text: "Initiating a dispute process via your banking institution triggers a security lockdown on your profile. Furthermore, policy dictates that after a renewal processes, all funds are non-refundable under any circumstance.", points: 7, feedback: "Acts as a total brick wall. Using terms like 'security lockdown' sounds threatening and escalates a customer who is already ready to dispute the charge." },
                    { text: "Please don't do a chargeback! My manager will yell at me and I won't be able to buy lunch today! What if I mail you a box of fresh cookies from my kitchen instead of the money?", points: 1, feedback: "Completely ridiculous. Bringing personal issues into the call and offering baked goods instead of addressing a financial dispute is totally unacceptable." }
                ]
            },
            {
                customer: "Thank you, that is exactly what I want. Now, my friend told me that your company has a strict 48-hour grace period for refunds and that after that, it's impossible to get money back. Am I safe, or is your system going to reject this refund automatically?",
                options: [
                    { text: "Your friend is right about our standard rule, but because you haven't used the software, I am using a manual system override code. This means your refund is locked in and safe. The system will not reject it.", points: 10, feedback: "Clear, honest, and reassuring. Explains that a manual override will bypass the standard rule, giving the customer absolute peace of mind without technical jargon." },
                    { text: "The 48-hour administrative grace period criteria is indeed hardcoded into the system kernel. However, I am executing an executive operational variance command to suppress the automated rejection script.", points: 7, feedback: "Too technical. Mentioning 'system kernel' and 'executive operational variance command to suppress an automated rejection script' sounds like a sci-fi movie." },
                    { text: "Oh, your friend is a big liar! Don't trust your friends. Trust me, I am your new best friend and I can break any law in this company just for you!", points: 2, feedback: "Highly unprofessional. Calling the customer's friend a liar and claiming to 'break laws' is inappropriate and creates massive liability." }
                ]
            },
            {
                customer: "Okay, excellent. I appreciate you taking care of that. Now, can you make sure to turn off any future billing or auto-renewals on this account? I also want you to waive any cancellation fees because I want this account completely closed.",
                options: [
                    { text: "Everything is taken care of, Ms. Jenkins. I have completely turned off the auto-renewal feature, and there are absolutely no fees to close the account today. Your balance is completely zero.", points: 10, feedback: "Perfect closing preparation. Confirms that future billing is stopped, explicitly confirms there are no fees using the word 'waive' implicitly, and confirms a clean balance." },
                    { text: "I am updating the backend profile flag to 'inactive'. The system will automatically waive the cancellation liability item upon the termination of this session, leaving zero outstanding debit.", points: 7, feedback: "Too mechanical. Explaining 'backend profile flags' and 'cancellation liability items' is unnecessary internal system chatter." },
                    { text: "Done! I just deleted our company's main computer database from the internet. Now nobody can ever bill anyone ever again! Aren't you proud of me?", points: 1, feedback: "Absurd and childish fiction. Claiming to delete the company database is an unhelpful and unrealistic distraction." }
                ]
            },
            {
                customer: "Perfect. I see the confirmation email stating the account is closed and the refund is processing. Thanks for sorting this out so fast, you've been really helpful.",
                options: [
                    { text: "You are very welcome, Ms. Jenkins! I am glad we could get this refund and closure sorted out quickly for you. Thank you for your time, and I hope you have a wonderful rest of your day!", points: 10, feedback: "Fantastic closing. Polite, efficient, friendly, and summarizes the positive outcome of the interaction cleanly." },
                    { text: "The transaction has successfully concluded. The support log has been filed into our CRM database. You are now cleared to end this voice transmission link.", points: 7, feedback: "Incredibly cold. Treating a human customer call like a 'voice transmission link' that is 'cleared to end' is peak robotic behavior." },
                    { text: "Yay, we won! Since I helped you so much, can you order a large pepperoni pizza and have it delivered to my call center desk right now? I am starving!", points: 2, feedback: "Completely inappropriate. Solicitating food, gifts, or favors from a customer crosses all professional boundaries in a call center environment." }
                ]
            }
        ]
    },
    {
  "id": "c5",
  "category": "Retention / Billing",
  "title": "Handling an Unexpected Hidden Surcharge",
  "difficulty": "B1 Intermediate",
  "description": "Un cliente nativo llama frustrado tras notar un cargo inesperado etiquetado como tasa de mantenimiento regulatoria. El agente debe de-escalar la llamada modulando su lenguaje de manera clara, empática y directa, evitando tecnicismos complejos del sistema de facturación.",
  "vocabulary": {
    "billing cycle": {
      "meaning": "The recurring period of time for which a customer is invoiced for a service.",
      "examples": [
        "The new feature will appear on your next billing cycle.",
        "My billing cycle resets on the first day of every month."
      ]
    },
    "hidden surcharge": {
      "meaning": "An extra fee or cost added to a bill that was not clearly stated or expected.",
      "examples": [
        "I was shocked to find a hidden surcharge on my hotel invoice.",
        "Our company policy ensures there is never a hidden surcharge on your plan."
      ]
    },
    "flat rate": {
      "meaning": "A fixed price or charge that remains the same and does not vary with usage or extra factors.",
      "examples": [
        "They offered me a flat rate of forty dollars for unlimited data.",
        "Is this package a flat rate or are there extra variable costs?"
      ]
    },
    "waived": {
      "meaning": "Officially removed or forgiven so that a customer does not have to pay it.",
      "examples": [
        "The representative waived the activation fee as a courtesy.",
        "Can this late payment penalty be completely waived?"
      ]
    },
    "itemized statement": {
      "meaning": "A detailed list or bill showing every single individual charge broken down by line items.",
      "examples": [
        "Please send me an itemized statement so I can review every single fee.",
        "The itemized statement clearly shows the standard maintenance cost."
      ]
    },
    "paperless billing": {
      "meaning": "An option where bills are sent to the customer electronically via email or app instead of physical mail.",
      "examples": [
        "Switching to paperless billing saves paper and prevents delivery delays.",
        "Is there a discount if I sign up for paperless billing today?"
      ]
    },
    "credit line item": {
      "meaning": "A specific entry on an invoice showing an amount of money returned or added back to an account.",
      "examples": [
        "You will see a twenty-dollar credit line item on your next statement.",
        "The agent applied a credit line item to correct the overcharge."
      ]
    }
  },
  "steps": [
    {
      "customer": "Hi. I'm calling because I just looked at my latest billing cycle and I see a $15 fee listed as a regulatory maintenance fee. Nobody ever told me about this hidden surcharge when I signed up.",
      "options": [
        {
          "text": "I can completely understand why seeing a surprise fee like that would be frustrating. Let's look into this regulatory maintenance fee together right now so I can explain what it is and see how we can fix this. May I have your name, please?",
          "points": 10,
          "roleInvertedPoints": 2,
          "feedback": "Excellent de-escalation. Validates the frustration immediately, speaks clearly and sets up a collaborative environment using simple words."
        },
        {
          "text": "Per corporate compliance protocols, all residential accounts are subject to regional adjustments. The automated invoice generator applies this tariff based on localized backend infrastructure data. Give me your account number.",
          "points": 7,
          "roleInvertedPoints": 6,
          "feedback": "Too robotic and defensive. Relying heavily on heavy jargon like 'compliance protocols' and 'automated invoice generator' alienates a B1 tier conversation."
        },
        {
          "text": "Oh, wow! That is awful! Our system is always making mistakes and lying to people about prices. Let's just delete that fee and pretend our billing department doesn't exist!",
          "points": 1,
          "roleInvertedPoints": 10,
          "feedback": "Absurd and highly unprofessional. Saying the company lies and making unrealistic claims about deleting system rules breaks compliance."
        }
      ]
    },
    {
      "customer": "My name is David Miller. Look, the salesman told me I would be paying a flat rate of $45 a month, period. If my bill changes every time, I don't want to keep this service.",
      "options": [
        {
          "text": "Thank you, Mr. Miller. You are entirely right to expect the price you were promised. The $45 is your base price, but this fee was added by the system. Let me check your profile right now to see how we can get this fee removed.",
          "points": 10,
          "roleInvertedPoints": 2,
          "feedback": "Perfect. Validates the agreement, confirms the promised price, and takes direct action to investigate a solution with plain language."
        },
        {
          "text": "The flat rate you are referencing only covers the base subscription parameters. It does not encompass ancillary regulatory line items generated by system cron-jobs during the billing calculation phase.",
          "points": 7,
          "roleInvertedPoints": 6,
          "feedback": "Highly mechanical. Terms like 'base subscription parameters' and 'ancillary regulatory line items generated by system cron-jobs' are confusing backend talk."
        },
        {
          "text": "I completely agree, David! Money is a social construct anyway, so why should we care? Let's just change your bill to $0 forever so you can be completely happy!",
          "points": 2,
          "roleInvertedPoints": 10,
          "feedback": "Completely ridiculous. Offering to drop a subscription cost to zero dollars forever is an impossible, non-compliant distraction."
        }
      ]
    },
    {
      "customer": "I appreciate that. I just want this specific $15 fee waived for this month, and I need a guarantee that it won't show up again on my next statement.",
      "options": [
        {
          "text": "I can absolutely remove that $15 fee for you today as a courtesy. To make sure it doesn't come back, I am going to apply a special bundle discount to your profile that offsets this cost permanently. Your monthly total will stay at $45.",
          "points": 10,
          "roleInvertedPoints": 2,
          "feedback": "Masterful adjustment. Grants the immediate waiver and provides a permanent, practical solution to lock in the customer's expected rate."
        },
        {
          "text": "I have the administrative authorization to apply a one-time ledger adjustment for the $15. However, the system architecture will re-evaluate the account profile next month and may re-apply the standard fee automatically.",
          "points": 7,
          "roleInvertedPoints": 6,
          "feedback": "Provides a temporary fix but leaves the root problem open, telling the customer that the system might just create the exact same issue next month."
        },
        {
          "text": "Don't worry, David, I will write a giant sticky note and paste it onto our company's main server room door so the computers never charge you again!",
          "points": 1,
          "roleInvertedPoints": 10,
          "feedback": "Childish and absurd. Proposing a physical sticky note on a server door as a system solution is completely unrealistic."
        }
      ]
    },
    {
      "customer": "That sounds fair. Can you send me an itemized statement right now showing that the $15 has been taken off? I like to keep everything in writing for my personal records.",
      "options": [
        {
          "text": "Of course. I am updating your account right now. I will email you a new, clear summary within the next two minutes showing the credit and your correct total. Let's make sure it arrives safely.",
          "points": 10,
          "roleInvertedPoints": 2,
          "feedback": "Excellent response. Confirms immediate execution, provides a very clear timeline (two minutes), and focuses on keeping the client informed."
        },
        {
          "text": "An inventory PDF manifest has been queued for data compilation. The backend server will broadcast an electronic confirmation packet containing the modified spreadsheet to your primary email routing node.",
          "points": 7,
          "roleInvertedPoints": 6,
          "feedback": "Too industrial and technical. Phrases like 'inventory PDF manifest', 'data compilation', and 'email routing node' sound like an automated machine speech."
        },
        {
          "text": "Oh, I can't send emails today because our internet lines are being used to download a massive video game right now. Can I just read the numbers out loud fifty times instead?",
          "points": 2,
          "roleInvertedPoints": 10,
          "feedback": "Highly unprofessional. Inventing a fake excuse about downloading games on company bandwidth is completely unacceptable."
        }
      ]
    },
    {
      "customer": "Got it, the email just popped up and the total is back to $45. Now, the email mentions something about paperless billing. Am I going to get charged extra if I don't sign up for that?",
      "options": [
        {
          "text": "That is a great question. No, you will not be charged extra, but signing up for paperless billing actually gives you a small $2 monthly discount. Would you like me to turn that on to save you a bit more money?",
          "points": 10,
          "roleInvertedPoints": 2,
          "feedback": "Perfect. Answers the direct question clearly and turns an informational inquiry into an upsell opportunity that saves the customer money."
        },
        {
          "text": "Paperless billing is an automated system default recommendation. Non-compliance with electronic statement delivery protocols does not currently trigger a negative tariff, though policy adjustments are subject to change.",
          "points": 7,
          "roleInvertedPoints": 6,
          "feedback": "Cold and sterile. Explaining 'non-compliance with electronic statement delivery protocols' is overly formal and misses the chance to offer a discount."
        },
        {
          "text": "Yes! If you don't sign up for paperless billing, our company sends a giant truck to dump thousands of old newspapers directly onto your front lawn every single morning!",
          "points": 1,
          "roleInvertedPoints": 10,
          "feedback": "Absurd threat. Using a ridiculous and completely false story about dumping garbage on a customer's lawn destroys any remaining rapport."
        }
      ]
    },
    {
      "customer": "Sure, let's do it. If it saves me another $2 and keeps my bill simple, go ahead and turn it on. Does that show up on this statement or next month?",
      "options": [
        {
          "text": "I have turned that on for you. Since this month's bill is already processed, you will see that new discount start on your next statement. Is there anything else I can double-check for you today?",
          "points": 10,
          "roleInvertedPoints": 2,
          "feedback": "Clear and concise. Sets proper expectations for when the new discount applies and finishes with a proactive offer of further assistance."
        },
        {
          "text": "The paperless discount token has been injected into the next pending batch cycle. It will manifest as a recurring credit line item upon the generation of the subsequent invoice document.",
          "points": 7,
          "roleInvertedPoints": 6,
          "feedback": "Too robotic. Using expressions like 'discount token has been injected' and 'subsequent invoice document' makes a simple process sound unnecessarily complex."
        },
        {
          "text": "It will show up in exactly one second! Look at your phone right now! If it's not there, it means a digital ghost stole your discount code!",
          "points": 1,
          "roleInvertedPoints": 10,
          "feedback": "Ridiculous and unprofessional. Setting an impossible timeline and talking about 'digital ghosts' is completely unacceptable for a professional agent."
        }
      ]
    }
  ]
},
    // --- LEVEL C1 ---
    {
        id: "c1",
        category: "Billing & Account Retention",
        title: "The Premium Plan Downgrade & Hidden Fees Dispute",
        difficulty: "C1 Advanced",
        description: "Escenario largo de alta fricción. Resuelve cobros ocultos y retén una cuenta B2B corporativa a lo largo de 6 etapas de negociación.",
        vocabulary: {
            "out of whack": { meaning: "Not working correctly, out of alignment, or drastically incorrect (often used for numbers/bills).", examples: ["My invoice this month is completely out of whack.", "The automated system went out of whack."] },
            "grandfathered": { meaning: "Allowed to keep an old rule, price, or privilege even after a new rule or price change goes into effect.", examples: ["Early subscribers were grandfathered at the old rate.", "I want to keep my grandfathered unlimited feature."] },
            "rip-off": { meaning: "Something that is grossly overpriced or a scam; a bad deal.", examples: ["Charging a $15 fee just to pay online is an absolute rip-off.", "The customer claimed our premium tier was a total rip-off."] },
            "pass the buck": { meaning: "To shift blame or responsibility to someone else or to a different department/system.", examples: ["Don't pass the buck to IT; we need to own this billing mistake.", "I'm tired of agents passing the buck."] },
            "leverage": { meaning: "Something which gives help or advantage in achieving a desired result.", examples: ["The customer used the competitor's offer as leverage.", "We have no financial leverage in this contract negotiation."] },
            "scrubbed": { meaning: "Permanently deleted, cleaned, or purged from a computer system for privacy compliance.", examples: ["Ensure the hard drives are completely scrubbed.", "Under privacy laws, user records must be scrubbed."] }
        },
        steps: [
            {
                customer: "Listen, I just got hit with a bill that's way out of whack. I was explicitly told when I downgraded to the basic tier that my grandfathered features wouldn't trigger any extra surcharges. Now I'm looking at a $45 'legacy maintenance fee'. This is an absolute rip-off, and if you can't waive it right now, you might as well just close my entire account.",
                options: [
                    { text: "I completely get why seeing an unexpected fee like that would make you want to walk away, especially after being assured otherwise. Let's look into that 'legacy maintenance fee' together right now. I want to make sure your billing perfectly reflects what you were promised. May I have your account number to get this sorted out?", points: 10, feedback: "Excellent. Validates frustration immediately, targets the fee, and moves to verification." },
                    { text: "Per our company policy, legacy features retained on basic tiers are subject to automated maintenance surcharges. I can review the account to see if a one-time courtesy credit applies, but the system generates these fees automatically. Please provide your account details.", points: 7, feedback: "Accurate but completely rigid and defensive behind company policy terms." },
                    { text: "Oh, I am so incredibly sorry for this horrible experience! You have been such a loyal customer with us and we value you so much. I completely agree that fees are terrible. Let me go ahead and upgrade you back to our Ultra Premium Platinum Package for free for the next 48 hours so you can feel better!", points: 2, feedback: "Toxic positivity distraction. Offers an unrelated short-term package that leaves the fee error alive." }
                ]
            },
            {
                customer: "An upgrade? Are you even listening to me? I don't want a shiny new package, I want my money back! The rep last month assured me—black and white—that my bill would be a flat $30. If your system generated this automatically, then your system is broken. Am I getting this $45 refunded or am I talking to your supervisor?",
                options: [
                    { text: "You're entirely right to hold us to what you were promised in black and white. I'm not going to pass the buck to a system error. I have your account pulled up now, and I am issuing a direct credit of $45 to reverse that charge immediately. While that processes, let's permanently adjust your profile so this specific surcharge never triggers again. Fair enough?", points: 10, feedback: "Perfect ownership. Avoids corporate excuses, processes credit, and applies permanent fix parameters." },
                    { text: "I can credit the $45 back to your original payment method today. However, please note that if you keep those specific grandfathered features, the system may flag the account again next month. I can initiate the refund now if you approve.", points: 7, feedback: "Processes solution mechanics but leaves the root operational issue broken for next month." },
                    { text: "I hear you loud and clear, and I would love to connect you to my supervisor, but their queue is currently backed up for three hours. Instead, how about I send a formal complaint directly to our CEO's office on your behalf so they can investigate our automated billing software?", points: 1, feedback: "Ultimate distraction and pass the buck loop. Escalates to the CEO to avoid a localized credit button action." }
                ]
            },
            {
                customer: "Fine, credit the money. But you just said something that caught my attention—'permanently adjust my profile.' Does that mean my grandfathered cloud storage is actually safe, or are you going to quietly strip it away next month to avoid the fee?",
                options: [
                    { text: "Your cloud storage is completely safe. To be crystal clear: I am applying an explicit, permanent system override code to your account. This locks in your grandfathered storage quota at your current basic rate, meaning you keep the benefit without the system flagging it for a surcharge. You won't have to call us back about this.", points: 10, feedback: "Flawless transparent reassurance. Explains parameters cleanly to secure customer trust." },
                    { text: "The profile adjustment will modify the backend SKU codes. Your grandfathered storage should theoretically remain active on the basic tier, provided no further system-wide updates override the manual adjustment I am performing today.", points: 7, feedback: "Too technical and filled with ambiguity ('theoretically'). Leaves room for doubt." },
                    { text: "Oh, your cloud storage is absolutely beautiful and we would never dream of touching it! It is safe with us forever and ever. In fact, just to prove it, I can add an extra 5GB of trial storage that expires next Tuesday!", points: 1, feedback: "Childish vocabulary, fake security metaphors, and completely useless expiring trials." }
                ]
            },
            {
                customer: "Alright, I see the credit pending on my dashboard app now. But honestly, this entire headache has left a bad taste in my mouth. My colleagues are using SyncCloud Corp, and they don't deal with these server surcharge surprises. They are offering us a contract buyout. Why should I stay with your platform if I have to monitor my statement like a hawk?",
                options: [
                    { text: "I completely validate that feeling; monitoring statements is the last thing you should be doing. While SyncCloud has competitive standard offers, they lack our custom integration capabilities that your business actively relies on. To thank you for giving me the chance to fix this today, I'm applying a 15% loyalty discount to your basic rate for the next six months. Let's make sure our relationship stays solid.", points: 10, feedback: "Superb retention approach. Matches the competitive leverage with value features and a precise financial incentive." },
                    { text: "SyncCloud Corp has a different pricing model that charges hidden data migration fees in their fine print. If you choose to accept their buyout contract, you will have to pay our standard cancellation penalty anyway. It's more expensive to leave.", points: 6, feedback: "Defensive and threatening. Critiques competition unprofessionally and blackmails with cancellation fees." },
                    { text: "Oh wow, SyncCloud has a really pretty dashboard! I think their logo looks super modern. If you want to switch to them, I can give you their customer support phone number right now so you don't have to search for it on Google!", points: 1, feedback: "Complete disaster. Actively helps the customer churn and praises the direct competitor." }
                ]
            },
            {
                customer: "A 15% discount is fair, and you're right about the custom integrations—switching would be a logistics nightmare for my IT team. Let's sign that discount. However, just in case things go out of whack again later, I need to know: if we ever do cancel, what happens to our sensitive database files? Are they completely scrubbed, or do you keep copies on your cloud backup?",
                options: [
                    { text: "Security and compliance are our absolute priorities. Upon formal account closure, your data enters a legal 30-day 'soft-deletion' hold, after which our servers execute an unrecoverable hard-scrub that completely purges all databases, fully complying with standard privacy laws. You can even request an immediate manual purge on your exit statement.", points: 10, feedback: "Provides expert, precise technical and compliance information, giving ultimate peace of mind." },
                    { text: "Our backend servers process file deletion automatically according to data regulation protocols. Once the system switches your account status from active to deactivated, your data is no longer accessible by standard users.", points: 7, feedback: "Vague and mechanical. Does not explicitly confirm if data is scrubbed or permanently archived." },
                    { text: "Don't worry about privacy, our cloud is guarded by digital cyber-dragons! Nobody can ever see your databases. Plus, I can change your password to 'Secret123' right now so you feel completely safe!", points: 1, feedback: "Ridiculous metaphors and dangerous security configurations. Completely fails the advanced corporate context." }
                ]
            },
            {
                customer: "Perfect. A hard-scrub option is exactly what our compliance officer requires. You've been incredibly helpful today and handled this mess properly. I'll accept the profile override and the 6-month loyalty discount. Let's finalize the ticket.",
                options: [
                    { text: "It has been an absolute pleasure getting this aligned for you today. The $45 credit is active, your profile override is locked in, and the 15% discount will reflect on your next cycle. Thank you for your tenure and patience. Have a productive day ahead!", points: 10, feedback: "Master closing. Recaps all actions processed, reinforces value, and closes with ultimate professionalism." },
                    { text: "No problem. I have saved all changes in the system database log. The billing error is fixed now. Thanks for calling customer support. Goodbye.", points: 7, feedback: "Plano y cortante. Resuelve la llamada de manera mecánica sin dejar impacto positivo de marca." },
                    { text: "Awesome! I am so happy I could save your job and save our friendship today! Please remember to give me 5 stars on the survey or I won't get my monthly bonus, okay? Bye-bye!", points: 2, feedback: "Unprofessional and desperate. Begging for survey scores ruins the entire consulting experience." }
                ]
            }
        ]
    }
];
