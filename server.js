var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;
var channels = require('./channel.json');

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var all;
var cfx;
var hfa;
var mpe;
var hpe;
var mxe;
var mhd;
var mph;
var map;
var mgm;
var t2h;
var tc6;
var tc1;
var tch;
var tc2;
var tc3;
var tnh;
var tnt;
var sph;
var tcm;
var spa;
var hbh;
var tc5;
var mnx;
var hbo;
var hb2;
var tc4;
var hfe;
var trh;
var tru;
var hpl;
var fox;
var fli;
var usa;
var fhd;
var axh;
var axn;
var wbt;
var tbs;
var tbh;
var apa;
var apl;
var ban;
var bbc;
var bem;
var bhd;
var bih;
var bio;
var bmg;
var cah;
var car;
var cfz;
var chd;
var che;
var cli;
var cnh;
var cnn;
var cnv;
var dci;
var dhd;
var dih;
var dik;
var dis;
var dkh;
var dnh;
var dny;
var dsc;
var dts;
var dtu;
var dxd;
var ebh;
var esb;
var esh;
var esi;
var esp;
var esq;
var eur;
var fhd;
var fne;
var fow;
var fs1;
var fs2;
var fsh;
var fsp;
var ftv;
var fut;
var gaw;
var gaz;
var ghg;
var ghs;
var glo;
var gnt;
var gnu;
var gob;
var goh;
var hih;
var mpx;
var msw;
var mtb;
var mts;
var mtv;
var ngh;
var nic;
var nih;
var paq;
var par;
var phd;
var poa;
var rec;
var s1h;
var s2h;
var s3h;
var sbd;
var sci;
var seh;
var set;
var shd;
var sp2;
var sp3;
var spi;
var spo;
var sup;
var suq;
var t2h;
var t3h;
var t4h;
var t5h;
var t6h;
var tlh;
var trv;
var tm1;
var tm2;
var tm3;
var tm4;
var tm5;
var tm6;
var tm7;
var tm8;
var tm9;
var toc;
var usa;
var ush;
var viv;
var vvh;
var wbh;
var woo;

app.get('/', function (req, res) {
    res.send('Esser servico esta bloqueado para terceiros!');
});

// first load channels
loadXMLDoc('all');
for (single in channels) {
    loadXMLDoc(channels[single].sigla);
}


// atualizando toso os canais na memoria.
setInterval(function () {

    loadXMLDoc('all');

    for (single in channels) {
        loadXMLDoc(channels[single].sigla);
    }

}, 600000);

var users_online = 0;
io.on('connection', function (socket) {

    users_online++;

    socket.on('disconnect', function() {
        users_online--;
    });

    socket.on("rota", function (obj) {

        if (obj['rota'] == 'default') {

            socket.emit('rota_' + obj['user'], {
                'rota': obj['rota'],
                'req': all
            });

        } else if (obj['rota'] == 'single') {

            if (obj['single'] == 'cfx') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': cfx
                });
            } else

            if (obj['single'] == 'hfa') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': hfa
                });
            } else

            if (obj['single'] == 'mpe') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': mpe
                });
            } else

            if (obj['single'] == 'hpe') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': hpe
                });
            } else

            if (obj['single'] == 'mxe') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': mxe
                });
            } else

            if (obj['single'] == 'mhd') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': mhd
                });
            } else

            if (obj['single'] == 'mph') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': mph
                });
            } else

            if (obj['single'] == 'map') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': map
                });
            } else

            if (obj['single'] == 'mgm') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': mgm
                });
            } else

            if (obj['single'] == 't2h') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': t2h
                });
            } else

            if (obj['single'] == 'tc6') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tc6
                });
            } else

            if (obj['single'] == 'tc1') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tc1
                });
            } else

            if (obj['single'] == 'tch') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tch
                });
            } else

            if (obj['single'] == 'tc2') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tc2
                });
            } else

            if (obj['single'] == 'tc3') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tc3
                });
            } else

            if (obj['single'] == 'tnh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tnh
                });
            } else

            if (obj['single'] == 'tnt') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tnt
                });
            } else

            if (obj['single'] == 'sph') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': sph
                });
            } else

            if (obj['single'] == 'tcm') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tcm
                });
            } else

            if (obj['single'] == 'spa') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': spa
                });
            } else

            if (obj['single'] == 'hbh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': hbh
                });
            } else

            if (obj['single'] == 'tc5') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tc5
                });
            } else

            if (obj['single'] == 'mnx') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': mnx
                });
            } else

            if (obj['single'] == 'hbo') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': hbo
                });
            } else

            if (obj['single'] == 'hb2') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': hb2
                });
            } else

            if (obj['single'] == 'tc4') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tc4
                });
            } else

            if (obj['single'] == 'hfe') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': hfe
                });
            } else

            if (obj['single'] == 'trh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': trh
                });
            } else

            if (obj['single'] == 'tru') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tru
                });
            } else

            if (obj['single'] == 'hpl') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': hpl
                });
            } else

            if (obj['single'] == 'fox') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': fox
                });
            } else

            if (obj['single'] == 'fli') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': fli
                });
            } else

            if (obj['single'] == 'usa') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': usa
                });
            } else

            if (obj['single'] == 'fhd') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': fhd
                });
            } else

            if (obj['single'] == 'axh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': axh
                });
            } else

            if (obj['single'] == 'axn') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': axn
                });
            } else

            if (obj['single'] == 'wbt') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': wbt
                });
            } else

            if (obj['single'] == 'tbs') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tbs
                });
            } else

            if (obj['single'] == 'tbh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tbh
                });
            } else

            if (obj['single'] == 'apa') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': apa
                });
            } else

            if (obj['single'] == 'apl') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': apl
                });
            } else

            if (obj['single'] == 'ban') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': ban
                });
            } else

            if (obj['single'] == 'bbc') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': bbc
                });
            } else

            if (obj['single'] == 'bem') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': bem
                });
            } else

            if (obj['single'] == 'bhd') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': bhd
                });
            } else

            if (obj['single'] == 'bih') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': bih
                });
            } else

            if (obj['single'] == 'bio') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': bio
                });
            } else

            if (obj['single'] == 'bmg') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': bmg
                });
            } else

            if (obj['single'] == 'cah') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': cah
                });
            } else

            if (obj['single'] == 'car') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': car
                });
            } else

            if (obj['single'] == 'cfz') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': cfz
                });
            } else

            if (obj['single'] == 'chd') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': chd
                });
            } else

            if (obj['single'] == 'che') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': che
                });
            } else

            if (obj['single'] == 'cli') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': cli
                });
            } else

            if (obj['single'] == 'cnh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': cnh
                });
            } else

            if (obj['single'] == 'cnn') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': cnn
                });
            } else

            if (obj['single'] == 'cnv') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': cnv
                });
            } else

            if (obj['single'] == 'dci') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': dci
                });
            } else

            if (obj['single'] == 'dhd') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': dhd
                });
            } else

            if (obj['single'] == 'dih') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': dih
                });
            } else

            if (obj['single'] == 'dik') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': dik
                });
            } else

            if (obj['single'] == 'dis') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': dis
                });
            } else

            if (obj['single'] == 'dkh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': dkh
                });
            } else

            if (obj['single'] == 'dnh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': dnh
                });
            } else

            if (obj['single'] == 'dny') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': dny
                });
            } else

            if (obj['single'] == 'dsc') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': dsc
                });
            } else

            if (obj['single'] == 'dts') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': dts
                });
            } else

            if (obj['single'] == 'dtu') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': dtu
                });
            } else

            if (obj['single'] == 'dxd') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': dxd
                });
            } else

            if (obj['single'] == 'ebh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': ebh
                });
            } else

            if (obj['single'] == 'esb') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': esb
                });
            } else

            if (obj['single'] == 'esh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': esh
                });
            } else

            if (obj['single'] == 'esi') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': esi
                });
            } else

            if (obj['single'] == 'esp') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': esp
                });
            } else

            if (obj['single'] == 'esq') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': esq
                });
            } else

            if (obj['single'] == 'eur') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': eur
                });
            } else

            if (obj['single'] == 'fhd') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': fhd
                });
            } else

            if (obj['single'] == 'fne') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': fne
                });
            } else

            if (obj['single'] == 'fow') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': fow
                });
            } else

            if (obj['single'] == 'fs1') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': fs1
                });
            } else

            if (obj['single'] == 'fs2') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': fs2
                });
            } else

            if (obj['single'] == 'fsh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': fsh
                });
            } else

            if (obj['single'] == 'fsp') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': fsp
                });
            } else

            if (obj['single'] == 'ftv') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': ftv
                });
            } else

            if (obj['single'] == 'fut') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': fut
                });
            } else

            if (obj['single'] == 'gaw') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': gaw
                });
            } else

            if (obj['single'] == 'gaz') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': gaz
                });
            } else

            if (obj['single'] == 'ghg') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': ghg
                });
            } else

            if (obj['single'] == 'ghs') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': ghs
                });
            } else

            if (obj['single'] == 'glo') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': glo
                });
            } else

            if (obj['single'] == 'gnt') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': gnt
                });
            } else

            if (obj['single'] == 'gnu') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': gnu
                });
            } else

            if (obj['single'] == 'gob') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': gob
                });
            } else

            if (obj['single'] == 'goh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': goh
                });
            } else

            if (obj['single'] == 'hih') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': hih
                });
            } else

            if (obj['single'] == 'mpx') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': mpx
                });
            } else

            if (obj['single'] == 'msw') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': msw
                });
            } else

            if (obj['single'] == 'mtb') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': mtb
                });
            } else

            if (obj['single'] == 'mts') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': mts
                });
            } else

            if (obj['single'] == 'mtv') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': mtv
                });
            } else

            if (obj['single'] == 'ngh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': ngh
                });
            } else

            if (obj['single'] == 'nic') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': nic
                });
            } else

            if (obj['single'] == 'nih') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': nih
                });
            } else

            if (obj['single'] == 'paq') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': paq
                });
            } else

            if (obj['single'] == 'par') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': par
                });
            } else

            if (obj['single'] == 'phd') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': phd
                });
            } else

            if (obj['single'] == 'poa') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': poa
                });
            } else

            if (obj['single'] == 'rec') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': rec
                });
            } else

            if (obj['single'] == 's1h') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': s1h
                });
            } else

            if (obj['single'] == 's2h') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': s2h
                });
            } else

            if (obj['single'] == 's3h') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': s3h
                });
            } else

            if (obj['single'] == 'sbd') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': sbd
                });
            } else

            if (obj['single'] == 'sci') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': sci
                });
            } else

            if (obj['single'] == 'seh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': seh
                });
            } else

            if (obj['single'] == 'set') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': set
                });
            } else

            if (obj['single'] == 'shd') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': shd
                });
            } else

            if (obj['single'] == 'sp2') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': sp2
                });
            } else

            if (obj['single'] == 'sp3') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': sp3
                });
            } else

            if (obj['single'] == 'spi') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': spi
                });
            } else

            if (obj['single'] == 'spo') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': spo
                });
            } else

            if (obj['single'] == 'sup') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': sup
                });
            } else

            if (obj['single'] == 'suq') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': suq
                });
            } else

            if (obj['single'] == 't2h') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': t2h
                });
            } else

            if (obj['single'] == 't3h') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': t3h
                });
            } else

            if (obj['single'] == 't4h') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': t4h
                });
            } else

            if (obj['single'] == 't5h') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': t5h
                });
            } else

            if (obj['single'] == 't6h') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': t6h
                });
            } else

            if (obj['single'] == 'tlh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tlh
                });
            } else

            if (obj['single'] == 'trv') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': trv
                });
            } else

            if (obj['single'] == 'tm1') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tm1
                });
            } else

            if (obj['single'] == 'tm2') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tm2
                });
            } else

            if (obj['single'] == 'tm3') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tm3
                });
            } else

            if (obj['single'] == 'tm4') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tm4
                });
            } else

            if (obj['single'] == 'tm5') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tm5
                });
            } else

            if (obj['single'] == 'tm6') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tm6
                });
            } else

            if (obj['single'] == 'tm7') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tm7
                });
            } else

            if (obj['single'] == 'tm8') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tm8
                });
            } else

            if (obj['single'] == 'tm9') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': tm9
                });
            } else

            if (obj['single'] == 'toc') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': toc
                });
            } else

            if (obj['single'] == 'usa') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': usa
                });
            } else

            if (obj['single'] == 'ush') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': ush
                });
            } else

            if (obj['single'] == 'viv') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': viv
                });
            } else

            if (obj['single'] == 'vvh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': vvh
                });
            } else

            if (obj['single'] == 'wbh') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': wbh
                });
            } else

            if (obj['single'] == 'woo') {
                socket.emit('rota_' + obj['user'], {
                    'rota': obj['rota'],
                    'req': woo
                });
            }

        } else {
            socket.emit('rota_' + obj['user'], 'nada encontrado');
        }
    });


    socket.on('users_online', function(users_online){
        socket.emit('users_online', socket.id);
    });


    // get quem sou 
    socket.on('quem_sou', function (quem_sou) {
        socket.emit('eu_sou', socket.id);
    });
});


var port = Number(process.env.PORT || 3000);

http.listen(port, function () {
    console.log('listening on *:3000');
});


// repo de functions

function parseUpdateFile(updateObj) {

    if (updateObj && updateObj != '') {
        return true;
    } else {
        return false;
    }
}

function loadXMLDoc(type) {

    var params = "action=" + (type == 'all' ? 'all' : 'single') + (type == 'all' ? '' : '&canal=' + type);

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
          setObjt((xhr.responseText ? xhr.responseText : false), type);
      }
    };
    xhr.open("GET", "https://socialcine-server-api.herokuapp.com/?" + params, true);
    xhr.send();
    
}


// atualizadno as variaveis global 

function setObjt(obj, type) {

    console.log(type + " - " + (obj ? "OK" : "ERROR"));

    if (type == 'all') {
        all = (parseUpdateFile(obj) == true ? obj : all);
    } else

    if (type == 'cfx') {
        cfx = (parseUpdateFile(obj) == true ? obj : cfx);
    } else

    if (type == 'hfa') {
        hfa = (parseUpdateFile(obj) == true ? obj : hfa);
    } else

    if (type == 'mpe') {
        mpe = (parseUpdateFile(obj) == true ? obj : mpe);
    } else

    if (type == 'hpe') {
        hpe = (parseUpdateFile(obj) == true ? obj : hpe);
    } else

    if (type == 'mxe') {
        mxe = (parseUpdateFile(obj) == true ? obj : mxe);
    } else

    if (type == 'mhd') {
        mhd = (parseUpdateFile(obj) == true ? obj : mhd);
    } else

    if (type == 'mph') {
        mph = (parseUpdateFile(obj) == true ? obj : mph);
    } else

    if (type == 'map') {
        map = (parseUpdateFile(obj) == true ? obj : map);
    } else

    if (type == 'mgm') {
        mgm = (parseUpdateFile(obj) == true ? obj : mgm);
    } else

    if (type == 't2h') {
        t2h = (parseUpdateFile(obj) == true ? obj : t2h);
    } else

    if (type == 'tc6') {
        tc6 = (parseUpdateFile(obj) == true ? obj : tc6);
    } else

    if (type == 'tc1') {
        tc1 = (parseUpdateFile(obj) == true ? obj : tc1);
    } else

    if (type == 'tch') {
        tch = (parseUpdateFile(obj) == true ? obj : tch);
    } else

    if (type == 'tc2') {
        tc2 = (parseUpdateFile(obj) == true ? obj : tc2);
    } else

    if (type == 'tc3') {
        tc3 = (parseUpdateFile(obj) == true ? obj : tc3);
    } else

    if (type == 'tnh') {
        tnh = (parseUpdateFile(obj) == true ? obj : tnh);
    } else

    if (type == 'tnt') {
        tnt = (parseUpdateFile(obj) == true ? obj : tnt);
    } else

    if (type == 'sph') {
        sph = (parseUpdateFile(obj) == true ? obj : sph);
    } else

    if (type == 'tcm') {
        tcm = (parseUpdateFile(obj) == true ? obj : tcm);
    } else

    if (type == 'spa') {
        spa = (parseUpdateFile(obj) == true ? obj : spa);
    } else

    if (type == 'hbh') {
        hbh = (parseUpdateFile(obj) == true ? obj : hbh);
    } else

    if (type == 'tc5') {
        tc5 = (parseUpdateFile(obj) == true ? obj : tc5);
    } else

    if (type == 'mnx') {
        mnx = (parseUpdateFile(obj) == true ? obj : mnx);
    } else

    if (type == 'hbo') {
        hbo = (parseUpdateFile(obj) == true ? obj : hbo);
    } else

    if (type == 'hb2') {
        hb2 = (parseUpdateFile(obj) == true ? obj : hb2);
    } else

    if (type == 'tc4') {
        tc4 = (parseUpdateFile(obj) == true ? obj : tc4);
    } else

    if (type == 'hfe') {
        hfe = (parseUpdateFile(obj) == true ? obj : hfe);
    } else

    if (type == 'trh') {
        trh = (parseUpdateFile(obj) == true ? obj : trh);
    } else

    if (type == 'tru') {
        tru = (parseUpdateFile(obj) == true ? obj : tru);
    } else

    if (type == 'hpl') {
        hpl = (parseUpdateFile(obj) == true ? obj : hpl);
    } else

    if (type == 'fox') {
        fox = (parseUpdateFile(obj) == true ? obj : fox);
    } else

    if (type == 'fli') {
        fli = (parseUpdateFile(obj) == true ? obj : fli);
    } else

    if (type == 'usa') {
        usa = (parseUpdateFile(obj) == true ? obj : usa);
    } else

    if (type == 'fhd') {
        fhd = (parseUpdateFile(obj) == true ? obj : fhd);
    } else

    if (type == 'axh') {
        axh = (parseUpdateFile(obj) == true ? obj : axh);
    } else

    if (type == 'axn') {
        axn = (parseUpdateFile(obj) == true ? obj : axn);
    } else

    if (type == 'wbt') {
        wbt = (parseUpdateFile(obj) == true ? obj : wbt);
    } else

    if (type == 'tbs') {
        tbs = (parseUpdateFile(obj) == true ? obj : tbs);
    } else

    if (type == 'tbh') {
        tbh = (parseUpdateFile(obj) == true ? obj : tbh);
    } else

    if (type == 'apa') {
        apa = (parseUpdateFile(obj) == true ? obj : apa);
    } else

    if (type == 'apl') {
        apl = (parseUpdateFile(obj) == true ? obj : apl);
    } else

    if (type == 'ban') {
        ban = (parseUpdateFile(obj) == true ? obj : ban);
    } else

    if (type == 'bbc') {
        bbc = (parseUpdateFile(obj) == true ? obj : bbc);
    } else

    if (type == 'bem') {
        bem = (parseUpdateFile(obj) == true ? obj : bem);
    } else

    if (type == 'bhd') {
        bhd = (parseUpdateFile(obj) == true ? obj : bhd);
    } else

    if (type == 'bih') {
        bih = (parseUpdateFile(obj) == true ? obj : bih);
    } else

    if (type == 'bio') {
        bio = (parseUpdateFile(obj) == true ? obj : bio);
    } else

    if (type == 'bmg') {
        bmg = (parseUpdateFile(obj) == true ? obj : bmg);
    } else

    if (type == 'cah') {
        cah = (parseUpdateFile(obj) == true ? obj : cah);
    } else

    if (type == 'car') {
        car = (parseUpdateFile(obj) == true ? obj : car);
    } else

    if (type == 'cfz') {
        cfz = (parseUpdateFile(obj) == true ? obj : cfz);
    } else

    if (type == 'chd') {
        chd = (parseUpdateFile(obj) == true ? obj : chd);
    } else

    if (type == 'che') {
        che = (parseUpdateFile(obj) == true ? obj : che);
    } else

    if (type == 'cli') {
        cli = (parseUpdateFile(obj) == true ? obj : cli);
    } else

    if (type == 'cnh') {
        cnh = (parseUpdateFile(obj) == true ? obj : cnh);
    } else

    if (type == 'cnn') {
        cnn = (parseUpdateFile(obj) == true ? obj : cnn);
    } else

    if (type == 'cnv') {
        cnv = (parseUpdateFile(obj) == true ? obj : cnv);
    } else

    if (type == 'dci') {
        dci = (parseUpdateFile(obj) == true ? obj : dci);
    } else

    if (type == 'dhd') {
        dhd = (parseUpdateFile(obj) == true ? obj : dhd);
    } else

    if (type == 'dih') {
        dih = (parseUpdateFile(obj) == true ? obj : dih);
    } else

    if (type == 'dik') {
        dik = (parseUpdateFile(obj) == true ? obj : dik);
    } else

    if (type == 'dis') {
        dis = (parseUpdateFile(obj) == true ? obj : dis);
    } else

    if (type == 'dkh') {
        dkh = (parseUpdateFile(obj) == true ? obj : dkh);
    } else

    if (type == 'dnh') {
        dnh = (parseUpdateFile(obj) == true ? obj : dnh);
    } else

    if (type == 'dny') {
        dny = (parseUpdateFile(obj) == true ? obj : dny);
    } else

    if (type == 'dsc') {
        dsc = (parseUpdateFile(obj) == true ? obj : dsc);
    } else

    if (type == 'dts') {
        dts = (parseUpdateFile(obj) == true ? obj : dts);
    } else

    if (type == 'dtu') {
        dtu = (parseUpdateFile(obj) == true ? obj : dtu);
    } else

    if (type == 'dxd') {
        dxd = (parseUpdateFile(obj) == true ? obj : dxd);
    } else

    if (type == 'ebh') {
        ebh = (parseUpdateFile(obj) == true ? obj : ebh);
    } else

    if (type == 'esb') {
        esb = (parseUpdateFile(obj) == true ? obj : esb);
    } else

    if (type == 'esh') {
        esh = (parseUpdateFile(obj) == true ? obj : esh);
    } else

    if (type == 'esi') {
        esi = (parseUpdateFile(obj) == true ? obj : esi);
    } else

    if (type == 'esp') {
        esp = (parseUpdateFile(obj) == true ? obj : esp);
    } else

    if (type == 'esq') {
        esq = (parseUpdateFile(obj) == true ? obj : esq);
    } else

    if (type == 'eur') {
        eur = (parseUpdateFile(obj) == true ? obj : eur);
    } else

    if (type == 'fhd') {
        fhd = (parseUpdateFile(obj) == true ? obj : fhd);
    } else

    if (type == 'fne') {
        fne = (parseUpdateFile(obj) == true ? obj : fne);
    } else

    if (type == 'fow') {
        fow = (parseUpdateFile(obj) == true ? obj : fow);
    } else

    if (type == 'fs1') {
        fs1 = (parseUpdateFile(obj) == true ? obj : fs1);
    } else

    if (type == 'fs2') {
        fs2 = (parseUpdateFile(obj) == true ? obj : fs2);
    } else

    if (type == 'fsh') {
        fsh = (parseUpdateFile(obj) == true ? obj : fsh);
    } else

    if (type == 'fsp') {
        fsp = (parseUpdateFile(obj) == true ? obj : fsp);
    } else

    if (type == 'ftv') {
        ftv = (parseUpdateFile(obj) == true ? obj : ftv);
    } else

    if (type == 'fut') {
        fut = (parseUpdateFile(obj) == true ? obj : fut);
    } else

    if (type == 'gaw') {
        gaw = (parseUpdateFile(obj) == true ? obj : gaw);
    } else

    if (type == 'gaz') {
        gaz = (parseUpdateFile(obj) == true ? obj : gaz);
    } else

    if (type == 'ghg') {
        ghg = (parseUpdateFile(obj) == true ? obj : ghg);
    } else

    if (type == 'ghs') {
        ghs = (parseUpdateFile(obj) == true ? obj : ghs);
    } else

    if (type == 'glo') {
        glo = (parseUpdateFile(obj) == true ? obj : glo);
    } else

    if (type == 'gnt') {
        gnt = (parseUpdateFile(obj) == true ? obj : gnt);
    } else

    if (type == 'gnu') {
        gnu = (parseUpdateFile(obj) == true ? obj : gnu);
    } else

    if (type == 'gob') {
        gob = (parseUpdateFile(obj) == true ? obj : gob);
    } else

    if (type == 'goh') {
        goh = (parseUpdateFile(obj) == true ? obj : goh);
    } else

    if (type == 'hih') {
        hih = (parseUpdateFile(obj) == true ? obj : hih);
    } else

    if (type == 'mpx') {
        mpx = (parseUpdateFile(obj) == true ? obj : mpx);
    } else

    if (type == 'msw') {
        msw = (parseUpdateFile(obj) == true ? obj : msw);
    } else

    if (type == 'mtb') {
        mtb = (parseUpdateFile(obj) == true ? obj : mtb);
    } else

    if (type == 'mts') {
        mts = (parseUpdateFile(obj) == true ? obj : mts);
    } else

    if (type == 'mtv') {
        mtv = (parseUpdateFile(obj) == true ? obj : mtv);
    } else

    if (type == 'ngh') {
        ngh = (parseUpdateFile(obj) == true ? obj : ngh);
    } else

    if (type == 'nic') {
        nic = (parseUpdateFile(obj) == true ? obj : nic);
    } else

    if (type == 'nih') {
        nih = (parseUpdateFile(obj) == true ? obj : nih);
    } else

    if (type == 'paq') {
        paq = (parseUpdateFile(obj) == true ? obj : paq);
    } else

    if (type == 'par') {
        par = (parseUpdateFile(obj) == true ? obj : par);
    } else

    if (type == 'phd') {
        phd = (parseUpdateFile(obj) == true ? obj : phd);
    } else

    if (type == 'poa') {
        poa = (parseUpdateFile(obj) == true ? obj : poa);
    } else

    if (type == 'rec') {
        rec = (parseUpdateFile(obj) == true ? obj : rec);
    } else

    if (type == 's1h') {
        s1h = (parseUpdateFile(obj) == true ? obj : s1h);
    } else

    if (type == 's2h') {
        s2h = (parseUpdateFile(obj) == true ? obj : s2h);
    } else

    if (type == 's3h') {
        s3h = (parseUpdateFile(obj) == true ? obj : s3h);
    } else

    if (type == 'sbd') {
        sbd = (parseUpdateFile(obj) == true ? obj : sbd);
    } else

    if (type == 'sci') {
        sci = (parseUpdateFile(obj) == true ? obj : sci);
    } else

    if (type == 'seh') {
        seh = (parseUpdateFile(obj) == true ? obj : seh);
    } else

    if (type == 'set') {
        set = (parseUpdateFile(obj) == true ? obj : set);
    } else

    if (type == 'shd') {
        shd = (parseUpdateFile(obj) == true ? obj : shd);
    } else

    if (type == 'sp2') {
        sp2 = (parseUpdateFile(obj) == true ? obj : sp2);
    } else

    if (type == 'sp3') {
        sp3 = (parseUpdateFile(obj) == true ? obj : sp3);
    } else

    if (type == 'spi') {
        spi = (parseUpdateFile(obj) == true ? obj : spi);
    } else

    if (type == 'spo') {
        spo = (parseUpdateFile(obj) == true ? obj : spo);
    } else

    if (type == 'sup') {
        sup = (parseUpdateFile(obj) == true ? obj : sup);
    } else

    if (type == 'suq') {
        suq = (parseUpdateFile(obj) == true ? obj : suq);
    } else

    if (type == 't2h') {
        t2h = (parseUpdateFile(obj) == true ? obj : t2h);
    } else

    if (type == 't3h') {
        t3h = (parseUpdateFile(obj) == true ? obj : t3h);
    } else

    if (type == 't4h') {
        t4h = (parseUpdateFile(obj) == true ? obj : t4h);
    } else

    if (type == 't5h') {
        t5h = (parseUpdateFile(obj) == true ? obj : t5h);
    } else

    if (type == 't6h') {
        t6h = (parseUpdateFile(obj) == true ? obj : t6h);
    } else

    if (type == 'tlh') {
        tlh = (parseUpdateFile(obj) == true ? obj : tlh);
    } else

    if (type == 'trv') {
        trv = (parseUpdateFile(obj) == true ? obj : trv);
    } else

    if (type == 'tm1') {
        tm1 = (parseUpdateFile(obj) == true ? obj : tm1);
    } else

    if (type == 'tm2') {
        tm2 = (parseUpdateFile(obj) == true ? obj : tm2);
    } else

    if (type == 'tm3') {
        tm3 = (parseUpdateFile(obj) == true ? obj : tm3);
    } else

    if (type == 'tm4') {
        tm4 = (parseUpdateFile(obj) == true ? obj : tm4);
    } else

    if (type == 'tm5') {
        tm5 = (parseUpdateFile(obj) == true ? obj : tm5);
    } else

    if (type == 'tm6') {
        tm6 = (parseUpdateFile(obj) == true ? obj : tm6);
    } else

    if (type == 'tm7') {
        tm7 = (parseUpdateFile(obj) == true ? obj : tm7);
    } else

    if (type == 'tm8') {
        tm8 = (parseUpdateFile(obj) == true ? obj : tm8);
    } else

    if (type == 'tm9') {
        tm9 = (parseUpdateFile(obj) == true ? obj : tm9);
    } else

    if (type == 'toc') {
        toc = (parseUpdateFile(obj) == true ? obj : toc);
    } else

    if (type == 'usa') {
        usa = (parseUpdateFile(obj) == true ? obj : usa);
    } else

    if (type == 'ush') {
        ush = (parseUpdateFile(obj) == true ? obj : ush);
    } else

    if (type == 'viv') {
        viv = (parseUpdateFile(obj) == true ? obj : viv);
    } else

    if (type == 'vvh') {
        vvh = (parseUpdateFile(obj) == true ? obj : vvh);
    } else

    if (type == 'wbh') {
        wbh = (parseUpdateFile(obj) == true ? obj : wbh);
    } else

    if (type == 'woo') {
        woo = (parseUpdateFile(obj) == true ? obj : woo);
    }

}