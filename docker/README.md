# Alla scoperta di Docker!

## WHY & WHAT: perchè usare docker? Cos'è?
Docker vuole rendere **immediata** l'installazione di un software su qualsiasi macchina senza preoccuparsi delle dipendenze o del setup.

![docker-diagrams-01](./assets/docker-diagrams-01.png)

### Containers
Un container è un **processo** con delle limitazioni hardware, non è un costrutto fisico:
1. **Name space** = Isola le risorse del processo.
2. **Control Group** = Limita le risorse hardware usate dal processo.

Docker è una piattaforma che si compone di tools per la gestione dei **container**.

![docker-diagrams-02](./assets/docker-diagrams-02.png)

### Focus: Docker Client e Docker Server
::: tip
C'è da considerare che **Docker Client = Docker CLI**, tramite la CLI possiamo dire alla docker Hub (Passando per il Docker Server, a.k.a. Daemon) di scaricare una determinata **Docker image** (Vedi [sotto](./#docker-image)), che può essere usata per instanziare un container
:::
- **Docker CLI** = applicativo che da terminale mi aiuta a dare **comandi** al Docker Server.
- **Docker Server** = applicativo che gira in background tramite il quale io faccio tutto ciò che è possibile fare con docker.
``` bash
$ docker version # Comando per poter vedere le versioni di Docker Client/Server ed altre info (come la versione di golang usata da Docker)

$ (sudo) docker run hello-world # Facciamo girare il nostro primo container!
# Se l'immagine non è presente nell'imageCache verrà scaricata
# Questo container stamperà a video un messaggio che spiega il processo fatto da docker per fare girare un container
# ↓
```
Messaggio stampato a video dopo l'esecuzione:
> Hello from Docker!
> This message shows that your installation appears to be working correctly.
>
> To generate this message, Docker took the following steps:
>  1. The Docker client contacted the Docker daemon.
>  2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
>     (amd64)
>  3. The Docker daemon created a new container from that image which runs the
>     executable that produces the output you are currently reading.
>  4. The Docker daemon streamed that output to the Docker client, which sent it
>     to your terminal.


![docker-diagrams-03](./assets/docker-diagrams-03.png)
![docker-diagrams-04](./assets/docker-diagrams-04.png)

### Focus: Docker Hub e Docker Images
Il Docker Hub è una repository piena di immagini gratuite e pubbliche, come visto sopra quando non si trova un immagine Docker prova automaticamente a scaricarla da qui.

#### Come funziona un OS (Operating System)
![docker-diagrams-05](./assets/docker-diagrams-05.png)
> **Kernel**: Layer che fa da [middleware](https://it.wikipedia.org/wiki/Middleware) tra i programmi e le risorse hardware

![docker-diagrams-06](./assets/docker-diagrams-06.png)

#### Docker image
> Se sei finito qui tramite il link sopra ecco un link per [tornarci](./#focus-docker-client-e-docker-server)

Un immagine è una rappresentazione binaria, come gli OVA (le immagine delle VM)<br>
All'interno di un'immagine vi è:
1. un **File system Snapshot**, ovvero una "foto" di un [File system](https://it.wikipedia.org/wiki/File_system) da implementare, una specie di copia-incolla di directory e files.
2. uno **Startup Command**, ovvero un comando che si esegue all'avvio del container.

Una volta creato un container a partire da questa immagine il container isolerà una porzione di [Hard Drive](https://it.wikipedia.org/wiki/Disco_rigido) per lui (quindi è come se in quella porzione di HD ci andasse il FS SnapShot).

![docker-diagrams-06](./assets/docker-diagrams-07.png)

##### Image Layers
Un altra nozione interessante è che le immagini possono avere un rapporto parent-child (padre-figlio), ovvero un'immagine può essere creata usandone un altra come base. Analizziamone i vantaggi:
- In questo modo è possibile che delle immagini condividano dei nodi
- Se trovo una vulnerabilità/problema in un nodo la modularità dell'immagine mi fa comodo

![docker-diagrams-06](./assets/docker-diagrams-10.png)

### Dockerfile
Un dockerfile è un envinronment descritto in un file di testo, dentro si scrivono comandi docker di cui necessitiamo l'esecuzione per configurare la nostra **immagine custom** (vedi capitolo)

## HOW: Come fa Docker a girare
Installando Docker si installa una **Linux VM** (Virtual Machine) ed è dentro di essa che sono creati i container.
::: tip
Infatti lanciando il comando sopra citato `docker version` e guardando su che [OS](https://it.wikipedia.org/wiki/Sistema_operativo) stanno girando Server e Client vedremo un sistema linux
:::
![docker-diagrams-08](./assets/docker-diagrams-08.png)