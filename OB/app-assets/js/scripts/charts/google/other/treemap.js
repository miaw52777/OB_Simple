/*=========================================================================================
    File Name: treemap.js
    Description: google treemap chart
    ----------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Theme
    Version: 1.2
    Author: GeeksLabs
    Author URL: http://www.themeforest.net/user/geekslabs
==========================================================================================*/

// Treemap chart
// ------------------------------

// Load the Visualization API and the corechart package.
google.load('visualization', '1.0', {'packages':['treemap']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawTreemap);

// Callback that creates and populates a data table, instantiates the pie chart, passes in the data and draws it.
function drawTreemap() {

    // Create the data table.
    var data = new google.visualization.DataTable();
        data.addColumn('string', 'ID');
        data.addColumn('string', 'Parent');
        data.addColumn('number', 'Number Of Lines');
        data.addRows([
            ['Shakespeare', null, 0],

            ['Comedies', 'Shakespeare', null],
            ['Tragedies', 'Shakespeare', null],
            ['Histories', 'Shakespeare', null],

            ['As You Like It', 'Comedies', null],
            ['Adam', 'As You Like It', 10],
            ['Amiens', 'As You Like It', 10],
            ['Audrey', 'As You Like It', 12],
            ['Celia', 'As You Like It', 108],
            ['Charles', 'As You Like It', 8],
            ['Corin', 'As You Like It', 24],
            ['Dennis', 'As You Like It', 2],
            ['Duke', 'As You Like It', 32],
            ['Frederick', 'As You Like It', 20],
            ['Hymen', 'As You Like It', 1],
            ['Jaques (lord)', 'As You Like It', 57],
            ['Jaques (son)', 'As You Like It', 2],
            ['Le Beau', 'As You Like It', 14],
            ['Oliver', 'As You Like It', 37],
            ['Orlando', 'As You Like It', 120],
            ['Phebe', 'As You Like It', 23],
            ['Rosalind', 'As You Like It', 201],
            ['Silvius', 'As You Like It', 24],
            ['Sir Oliver Martext', 'As You Like It', 3],
            ['Touchstone', 'As You Like It', 74],
            ['William', 'As You Like It', 11],

            ['Comedy Of Errors', 'Comedies', null],
            ['Adriana', 'Comedy Of Errors', 79],
            ['Aegeon', 'Comedy Of Errors', 17],
            ['Aemilia', 'Comedy Of Errors', 16],
            ['Angelo', 'Comedy Of Errors', 31],
            ['Antipholus of Ephesus', 'Comedy Of Errors', 76],
            ['Antipholus of Syracuse', 'Comedy Of Errors', 103],
            ['Balthazar', 'Comedy Of Errors', 5],
            ['Courtezan', 'Comedy Of Errors', 11],
            ['Dromio of Ephesus', 'Comedy Of Errors', 63],
            ['Dromio of Syracuse', 'Comedy Of Errors', 99],
            ['Luce', 'Comedy Of Errors', 7],
            ['Luciana', 'Comedy Of Errors', 43],
            ['Pinch', 'Comedy Of Errors', 6],
            ['Solinus', 'Comedy Of Errors', 22],

            ['Merchant Of Venice', 'Comedies', null],
            ['Antonio', 'Merchant Of Venice', 47],
            ['Balthasar', 'Merchant Of Venice', 1],
            ['Bassanio', 'Merchant Of Venice', 73],
            ['Duke (of Venice)', 'Merchant Of Venice', 18],
            ['Gratiano', 'Merchant Of Venice', 48],
            ['Jessica', 'Merchant Of Venice', 26],
            ['Launcelot Gobbo', 'Merchant Of Venice', 44],
            ['Leonardo', 'Merchant Of Venice', 2],
            ['Lorenzo', 'Merchant Of Venice', 47],
            ['Nerissa', 'Merchant Of Venice', 36],
            ['Old Gobbo', 'Merchant Of Venice', 19],
            ['Portia', 'Merchant Of Venice', 117],
            ['Prince of Arragon', 'Merchant Of Venice', 4],
            ['Prince of Morocco', 'Merchant Of Venice', 7],
            ['Salanio', 'Merchant Of Venice', 18],
            ['Salarino', 'Merchant Of Venice', 27],
            ['Salerio', 'Merchant Of Venice', 6],
            ['Shylock', 'Merchant Of Venice', 79],
            ['Stephano', 'Merchant Of Venice', 3],
            ['Tubal', 'Merchant Of Venice', 8],

            ['Midsummer Night\'s Dream', 'Comedies', null],
            ['Bottom', 'Midsummer Night\'s Dream', 59],
            ['Cobweb', 'Midsummer Night\'s Dream', 4],
            ['Demetrius', 'Midsummer Night\'s Dream', 48],
            ['Egeus', 'Midsummer Night\'s Dream', 7],
            ['Fairy', 'Midsummer Night\'s Dream', 4],
            ['Flute', 'Midsummer Night\'s Dream', 18],
            ['Helena', 'Midsummer Night\'s Dream', 36],
            ['Hermia', 'Midsummer Night\'s Dream', 48],
            ['Hippolyta', 'Midsummer Night\'s Dream', 14],
            ['Lysander', 'Midsummer Night\'s Dream', 50],
            ['Moth', 'Midsummer Night\'s Dream', 2],
            ['Mustardseed', 'Midsummer Night\'s Dream', 5],
            ['Oberon', 'Midsummer Night\'s Dream', 29],
            ['Peaseblossom', 'Midsummer Night\'s Dream', 4],
            ['Philostrate', 'Midsummer Night\'s Dream', 6],
            ['Puck', 'Midsummer Night\'s Dream', 33],
            ['Quince', 'Midsummer Night\'s Dream', 40],
            ['Snout', 'Midsummer Night\'s Dream', 9],
            ['Snug', 'Midsummer Night\'s Dream', 4],
            ['Starveling', 'Midsummer Night\'s Dream', 7],
            ['Theseus', 'Midsummer Night\'s Dream', 48],
            ['Titania', 'Midsummer Night\'s Dream', 23],

            ['Taming Of The Shrew', 'Comedies', null],
            ['Baptista Minola', 'Taming Of The Shrew', 68],
            ['Bianca', 'Taming Of The Shrew', 29],
            ['Biondello', 'Taming Of The Shrew', 39],
            ['Christopher Sly', 'Taming Of The Shrew', 24],
            ['Curtis', 'Taming Of The Shrew', 20],
            ['Gremio', 'Taming Of The Shrew', 58],
            ['Grumio', 'Taming Of The Shrew', 63],
            ['Haberdasher', 'Taming Of The Shrew', 1],
            ['Hortensio', 'Taming Of The Shrew', 70],
            ['Joseph',  'Taming Of The Shrew', 1],
            ['Katherina', 'Taming Of The Shrew', 82],
            ['Lucentio',  'Taming Of The Shrew', 61],
            ['Nathaniel', 'Taming Of The Shrew', 4],
            ['Nicholas', 'Taming Of The Shrew', 1],
            ['Peter',  'Taming Of The Shrew', 2],
            ['Petruchio', 'Taming Of The Shrew', 158],
            ['Philip',  'Taming Of The Shrew', 1],
            ['Tranio', 'Taming Of The Shrew', 90],
            ['Vincentio', 'Taming Of The Shrew', 23],

            ['The Tempest', 'Comedies', null],
            ['Adrian', 'The Tempest', 9],
            ['Alonso', 'The Tempest', 40],
            ['Antonio, duke of Milan', 'The Tempest', 57],
            ['Ariel', 'The Tempest', 45],
            ['Caliban', 'The Tempest', 50],
            ['Ceres', 'The Tempest', 4],
            ['Ferdinand', 'The Tempest', 31],
            ['Francisco', 'The Tempest', 2],
            ['Gonzalo', 'The Tempest', 52],
            ['Iris', 'The Tempest', 4],
            ['Juno', 'The Tempest', 2],
            ['Master', 'The Tempest', 2],
            ['Miranda', 'The Tempest', 50],
            ['Nymphs', 'The Tempest', 0],
            ['Prospero', 'The Tempest', 114],
            ['Reapers', 'The Tempest', 0],
            ['Sebastian', 'The Tempest', 67],
            ['Stephano (Servant to Portia)', 'The Tempest', 60],
            ['Trinculo', 'The Tempest', 39],

            ['Henry VIII', 'Histories', null],
            ['Anne Bullen', 'Henry VIII', 18],
            ['Archbishop Cranmer', 'Henry VIII', 21],
            ['Bishop Lincoln', 'Henry VIII', 2],
            ['Brandon', 'Henry VIII', 6],
            ['Capucius', 'Henry VIII', 5],
            ['Cardinal Campeius', 'Henry VIII', 14],
            ['Cardinal Wolsey', 'Henry VIII', 79],
            ['Cromwell', 'Henry VIII', 21],
            ['Doctor Butts', 'Henry VIII', 4],
            ['Duke of Buckingham', 'Henry VIII', 26],
            ['Duke of Norfolk', 'Henry VIII', 48],
            ['Duke of Suffolk', 'Henry VIII', 30],
            ['Earl of Surrey', 'Henry VIII', 24],
            ['First Secretary to Wolsey', 'Henry VIII', 2],
            ['Gardiner', 'Henry VIII', 22],
            ['Garter', 'Henry VIII', 1],
            ['Griffith', 'Henry VIII', 13],
            ['King Henry VIII', 'Henry VIII', 81],
            ['Lord Abergavenny', 'Henry VIII', 5],
            ['Lord Chamberlain', 'Henry VIII', 38],
            ['Lord Chancellor', 'Henry VIII', 7],
            ['Lord Sands', 'Henry VIII', 17],
            ['Old Lady', 'Henry VIII', 14],
            ['Patience', 'Henry VIII', 3],
            ['Porter (door-keeper of the Council-chamber)', 'Henry VIII', 10],
            ['Queen Katharine', 'Henry VIII', 50],
            ['Sir Anthony Denny', 'Henry VIII', 3],
            ['Sir Henry Guildford', 'Henry VIII', 1],
            ['Sir Nicholas Vaux', 'Henry VIII', 1],
            ['Sir Thomas Lovell', 'Henry VIII', 21],
            ['Surveyor to the Duke of Buckingham', 'Henry VIII', 9],

            ['History Of King John', 'Histories', null],
            ['Arthur Duke of Bretagne', 'History Of King John', 23],
            ['Blanch', 'History Of King John', 9],
            ['Cardinal Pandulph', 'History Of King John', 23],
            ['Chatillon', 'History Of King John', 5],
            ['Constance', 'History Of King John', 36],
            ['Essex', 'History Of King John', 1],
            ['Faulconbridge', 'History Of King John', 4],
            ['Hubert de Burgh', 'History Of King John', 52],
            ['James Gurney', 'History Of King John', 1],
            ['King John', 'History Of King John', 95],
            ['King Phillip', 'History Of King John', 43],
            ['Lady Faulconbridge', 'History Of King John', 5],
            ['Lewis the Dauphin', 'History Of King John', 29],
            ['Lord Bigot', 'History Of King John', 6],
            ['Lymoges duke of Austria', 'History Of King John', 16],
            ['Melun', 'History Of King John', 3],
            ['Pembroke earl of Pembroke', 'History Of King John', 20],
            ['Peter of Pomfret', 'History Of King John', 1],
            ['Philip the Bastard', 'History Of King John', 89],
            ['Prince Henry', 'History Of King John', 8],
            ['Queen Elinor', 'History Of King John', 22],
            ['Salisbury earl of Salisbury', 'History Of King John', 36],

            ['Antony And Cleopatra', 'Tragedies', null],
            ['Agrippa', 'Antony And Cleopatra', 28],
            ['Alexas', 'Antony And Cleopatra', 15],
            ['Antony', 'Antony And Cleopatra', 202],
            ['Canidius', 'Antony And Cleopatra', 10],
            ['Captain', 'Antony And Cleopatra', 1],
            ['Charmian', 'Antony And Cleopatra', 63],
            ['Cleopatra', 'Antony And Cleopatra', 204],
            ['Demetrius (Friend to Antony)', 'Antony And Cleopatra', 2],
            ['Dercetas', 'Antony And Cleopatra', 5],
            ['Diomedes', 'Antony And Cleopatra', 7],
            ['Dolabella', 'Antony And Cleopatra', 23],
            ['Domitius Enobarus', 'Antony And Cleopatra', 113],
            ['Egyptian', 'Antony And Cleopatra', 2],
            ['Eros', 'Antony And Cleopatra', 27],
            ['Euphronius', 'Antony And Cleopatra', 5],
            ['Gallus', 'Antony And Cleopatra', 1],
            ['Iras', 'Antony And Cleopatra', 18],
            ['Lepidus', 'Antony And Cleopatra', 30],
            ['Mardian', 'Antony And Cleopatra', 7],
            ['Mecaenas', 'Antony And Cleopatra', 16],
            ['Menas', 'Antony And Cleopatra', 35],
            ['Menecrates', 'Antony And Cleopatra', 2],
            ['Octavia', 'Antony And Cleopatra', 13],
            ['Octavius', 'Antony And Cleopatra', 98],
            ['Philo', 'Antony And Cleopatra', 2],
            ['Pompey', 'Antony And Cleopatra', 41],
            ['Proculeius', 'Antony And Cleopatra', 10],
            ['Scarus', 'Antony And Cleopatra', 12],
            ['Seleucus', 'Antony And Cleopatra', 3],
            ['Silius', 'Antony And Cleopatra', 3],
            ['Taurus', 'Antony And Cleopatra', 1],
            ['Thyreus', 'Antony And Cleopatra', 12],
            ['Varrius', 'Antony And Cleopatra', 1],
            ['Ventidius', 'Antony And Cleopatra', 4],

            ['Coriolanus', 'Tragedies', null],
            ['Aedile', 'Coriolanus', 10],
            ['Cominius', 'Coriolanus', 67],
            ['Coriolanus (Caius Marcius Coriolanus)', 'Coriolanus', 189],
            ['Junius Brutus', 'Coriolanus', 91],
            ['Lieutenant',  'Coriolanus', 4],
            ['Menenius Agrippa',  'Coriolanus', 162],
            ['Patrician', 'Coriolanus', 3],
            ['Roman', 'Coriolanus', 10],
            ['Sicinius Velutus', 'Coriolanus', 117],
            ['Titus Lartius', 'Coriolanus', 23],
            ['Tullus Aufidius', 'Coriolanus', 45],
            ['Valeria', 'Coriolanus', 14],
            ['Virgilia', 'Coriolanus', 26],
            ['Volsce', 'Coriolanus', 9],
            ['Volumnia',  'Coriolanus', 57],
            ['Young Coriolanus', 'Coriolanus', 1],

            ['Cymbeline', 'Tragedies', null],
            ['Arviragus', 'Cymbeline', 46],
            ['Belarius', 'Cymbeline', 58],
            ['Caius Lucius', 'Cymbeline', 25],
            ['Cloten',  'Cymbeline', 77],
            ['Cornelius (physician)', 'Cymbeline', 13],
            ['Cymbeline, King of Britain', 'Cymbeline', 81],
            ['Guiderius', 'Cymbeline', 62],
            ['Helen',  'Cymbeline', 0],
            ['Iachimo', 'Cymbeline', 77],
            ['Imogen',  'Cymbeline', 118],
            ['Jupiter', 'Cymbeline', 1],
            ['Philario', 'Cymbeline', 14],
            ['Pisanio',  'Cymbeline', 58],
            ['Posthumus Leonatus', 'Cymbeline', 77],
            ['Queen',  'Cymbeline', 27],
            ['Roman Captain', 'Cymbeline', 4],
            ['Sicilius Leonatus', 'Cymbeline', 7],

            ['The Tragedy of Hamlet, Prince of Denmark', 'Tragedies', null],
            ['Bernardo', 'The Tragedy of Hamlet, Prince of Denmark', 19],
            ['Claudius, King of Denmark', 'The Tragedy of Hamlet, Prince of Denmark', 102],
            ['Cornelius', 'The Tragedy of Hamlet, Prince of Denmark', 1],
            ['Father\'s Ghost', 'The Tragedy of Hamlet, Prince of Denmark', 15],
            ['Fortinbras', 'The Tragedy of Hamlet, Prince of Denmark', 6],
            ['Francisco ', 'The Tragedy of Hamlet, Prince of Denmark', 8],
            ['Gertrude', 'The Tragedy of Hamlet, Prince of Denmark', 69],
            ['Guildenstern', 'The Tragedy of Hamlet, Prince of Denmark', 29],
            ['Hamlet', 'The Tragedy of Hamlet, Prince of Denmark', 358],
            ['Horatio', 'The Tragedy of Hamlet, Prince of Denmark', 109],
            ['Laertes', 'The Tragedy of Hamlet, Prince of Denmark', 62],
            ['Lucianus', 'The Tragedy of Hamlet, Prince of Denmark', 0],
            ['Marcellus', 'The Tragedy of Hamlet, Prince of Denmark', 37],
            ['Ophelia', 'The Tragedy of Hamlet, Prince of Denmark', 58],
            ['Osric', 'The Tragedy of Hamlet, Prince of Denmark', 25],
            ['Polonius', 'The Tragedy of Hamlet, Prince of Denmark', 86],
            ['Reynaldo', 'The Tragedy of Hamlet, Prince of Denmark', 13],
            ['Rosencrantz', 'The Tragedy of Hamlet, Prince of Denmark', 48],
            ['Voltemand', 'The Tragedy of Hamlet, Prince of Denmark', 1],

            ['Julius Caesar', 'Tragedies', null],
            ['Antony (Marcus Antonius)', 'Julius Caesar', 51],
            ['Artemidorus of Cnidos', 'Julius Caesar', 4],
            ['Brutus (Marcus Brutus)', 'Julius Caesar', 194],
            ['Caesar (Julius Caesar)', 'Julius Caesar', 42],
            ['Calpurnia', 'Julius Caesar', 6],
            ['Casca', 'Julius Caesar', 39],
            ['Cassius', 'Julius Caesar', 140],
            ['Cicero', 'Julius Caesar', 4],
            ['Cinna', 'Julius Caesar', 11],
            ['Cinna the Poet', 'Julius Caesar', 8],
            ['Claudius', 'Julius Caesar', 2],
            ['Clitus', 'Julius Caesar', 8],
            ['Dardanius', 'Julius Caesar', 3],
            ['Decius Brutus', 'Julius Caesar', 12],
            ['Flavius', 'Julius Caesar', 5],
            ['Lepidus (Marcus Antonius Lepidus)', 'Julius Caesar', 3],
            ['Ligarius', 'Julius Caesar', 5],
            ['Lucilius', 'Julius Caesar', 10],
            ['Lucius', 'Julius Caesar', 24],
            ['Marullus', 'Julius Caesar', 6],
            ['Messala', 'Julius Caesar', 20],
            ['Metellus Cimber', 'Julius Caesar', 5],
            ['Octavius (Octavius Caesar)', 'Julius Caesar', 19],
            ['Pindarus', 'Julius Caesar', 5],
            ['Popilius (Popilius Lena)', 'Julius Caesar', 2],
            ['Portia (wife of Brutus)', 'Julius Caesar', 16],
            ['Publius', 'Julius Caesar', 2],
            ['Strato', 'Julius Caesar', 4],
            ['Tintinius', 'Julius Caesar', 10],
            ['Trebonius', 'Julius Caesar', 4],
            ['Varro', 'Julius Caesar', 6],
            ['Volumnius', 'Julius Caesar', 3],
            ['Young Cato', 'Julius Caesar', 3],

            ['King Lear', 'Tragedies', null],
            ['Cordelia',  'King Lear', 31],
            ['Curan',  'King Lear', 4],
            ['Duke of Albany', 'King Lear', 58],
            ['Duke of Burgundy', 'King Lear', 5],
            ['Duke of Cornwall', 'King Lear', 53],
            ['Earl of Gloucester', 'King Lear', 118],
            ['Earl of Kent', 'King Lear', 127],
            ['Edgar',  'King Lear', 98],
            ['Edmund', 'King Lear', 79],
            ['Goneril', 'King Lear', 53],
            ['King of France', 'King Lear', 5],
            ['Lear', 'King Lear', 188],
            ['Oswald', 'King Lear', 38],
            ['Regan',  'King Lear', 73],

            ['The Tragedy Of Macbeth', 'Tragedies', null],
            ['Angus', 'The Tragedy Of Macbeth', 4],
            ['Banquo', 'The Tragedy Of Macbeth', 33],
            ['Caithness', 'The Tragedy Of Macbeth', 3],
            ['Donalbain', 'The Tragedy Of Macbeth', 3],
            ['Duncan', 'The Tragedy Of Macbeth', 18],
            ['Fleance', 'The Tragedy Of Macbeth', 2],
            ['Hecate', 'The Tragedy Of Macbeth', 2],
            ['Lady Macbeth', 'The Tragedy Of Macbeth', 59],
            ['Lady Macduff', 'The Tragedy Of Macbeth', 19],
            ['Lennox', 'The Tragedy Of Macbeth', 21],
            ['Macbeth', 'The Tragedy Of Macbeth', 146],
            ['Macduff', 'The Tragedy Of Macbeth', 59],
            ['Malcolm', 'The Tragedy Of Macbeth', 40],
            ['Menteith', 'The Tragedy Of Macbeth', 5],
            ['Porter', 'The Tragedy Of Macbeth', 4],
            ['Ross', 'The Tragedy Of Macbeth', 39],
            ['Seyton', 'The Tragedy Of Macbeth', 5],
            ['Siward', 'The Tragedy Of Macbeth', 11],
            ['Son (Macduff\'s son)', 'The Tragedy Of Macbeth', 14],
            ['Young Siward', 'The Tragedy Of Macbeth', 4],

            ['The Tragedy Of Othello', 'Tragedies', null],
            ['Bianca (Mistress to Cassio)', 'The Tragedy Of Othello', 15],
            ['Brabantio', 'The Tragedy Of Othello', 30],
            ['Cassio', 'The Tragedy Of Othello', 110],
            ['Desdemona', 'The Tragedy Of Othello', 165],
            ['Duke of Venice', 'The Tragedy Of Othello', 25],
            ['Emilia', 'The Tragedy Of Othello', 103],
            ['Gratiano (Brother to Brabantio)', 'The Tragedy Of Othello', 20],
            ['Iago', 'The Tragedy Of Othello', 272],
            ['Lodovico', 'The Tragedy Of Othello', 33],
            ['Montano', 'The Tragedy Of Othello', 24],
            ['Othello', 'The Tragedy Of Othello', 274],
            ['Roderigo', 'The Tragedy Of Othello', 59],

            ['Romeo And Juliet', 'Tragedies', null],
            ['Abraham', 'Romeo And Juliet', 5],
            ['Balthasar (Servant to Romeo)', 'Romeo And Juliet', 12],
            ['Benvolio', 'Romeo And Juliet', 64],
            ['Capulet', 'Romeo And Juliet', 51],
            ['Friar John', 'Romeo And Juliet', 4],
            ['Friar Laurence', 'Romeo And Juliet', 55],
            ['Gregory', 'Romeo And Juliet', 15],
            ['Juliet', 'Romeo And Juliet', 118],
            ['Lady Capulet', 'Romeo And Juliet', 45],
            ['Lady Montague', 'Romeo And Juliet', 2],
            ['Mercutio', 'Romeo And Juliet', 62],
            ['Montague', 'Romeo And Juliet', 10],
            ['Paris', 'Romeo And Juliet', 23],
            ['Peter (Servant to Juliet\'s Nurse)', 'Romeo And Juliet', 13],
            ['Prince Escalus', 'Romeo And Juliet', 16],
            ['Romeo', 'Romeo And Juliet', 163],
            ['Sampson', 'Romeo And Juliet', 20],
            ['Tybalt', 'Romeo And Juliet', 17]
        ]);


    // Set chart options
    var options_treemap = {
        height: 500,
        fontSize: 12,
        headerColor:'#F6BB42',
        highlightOnMouseOver: true,
        maxDepth: 1,
        maxPostDepth: 2,
        minHighlightColor: '#8c6bb1',
        midHighlightColor: '#9ebcda',
        maxHighlightColor: '#edf8fb',
        minColor: '#DA4453',
        midColor: '#f7f7f7',
        maxColor: '#F6BB42',
        headerHeight: 15,
        showScale: true,
        useWeightedAverageForAggregation: true,
        chartArea: {
            left: '5%',
            width: '90%',
            height: 350
        },
    };

    // Instantiate and draw our chart, passing in some options.
    var treemap = new google.visualization.TreeMap(document.getElementById('treemap'));
    treemap.draw(data, options_treemap);

}


// Resize chart
// ------------------------------

$(function () {

    // Resize chart on menu width change and window resize
    $(window).on('resize', resize);
    $(".menu-toggle").on('click', resize);

    // Resize function
    function resize() {
        drawTreemap();
    }
});