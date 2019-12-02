---
prev: ./
next: false
---
# Root e chroot
In un OS Unix-like la root directory(**/**) è la cartella in cima a tutte le altre, è da qui quindi che nascono tutti i percorsi che compongono il Filesystem.

Ogni processo ha una sua diversa idea su quale sia la root, che di default corrisponde alla vera root del sistema, ma questo può essere cambiato con la system call **chroot()**. Così facendo possiamo creare un envinronment separato, più facile da debuggare.
::: warning
chroot **non fornisce una sandbox** sicura su cui far girare i software, perchè i path vengono solo modificati in base alla nuova root, ma tutti i percorsi fuori dala nuova root sono ancora **raggiungibili** con un path relativo
:::

# cgroups: Isolare e gestire le risorse
cgroups(**Control groups**) è una feature del kernel Linux che **limita, isola e misura** l'utilizzo delle risorse di un gruppo di processi.
> Se io do ad un processo un limite di allocazione di 2MB il processo **termina** quando arriva ad allocare più memoria

# Linux Namespaces
I processi Linux formano una singola **gerarchia**, con ogni processo che fa riferimento ad `init`.<br>
I namespaces linux ci permettono di avere tante gerarchie di processi con i loro "subtrees" i questo modo un processo in un subtree diverso **non può accedere/vedere** i processi di un altro subtree.<br>
Tipi di namespaces:
- **cgroup** = This isolates Cgroup root directory(CLONE_NEWCGROUP)
- **IPC** = isolates System V IPC, POSIX message queues(CLONE_NEWIPC)
- **Network** = isolates Network devices, ports etc(CLONE_NEWNET)
- **Mount** = isolates mountpoints(CLONE_NEWNS)
- **PID** = isolated process IDs(CLONE_NEWPID)
- **User** = isolates User and group IDs(CLONE_NEWUSER)
- **UTS** = isolates Hostname and NIS domain name(CLONE_NEWUTS)

Alcune APIs per la gestione dei namespace:
- **clone()** = plain old clone() creates a new process. If we pass one or more CLONE_NEW* flags to clone(),then new namespaces are created for each flag, and the child process is made a member of those namespaces.
- **setns()** = allows a process to join an existing namespace. The namspace is specified by a file descriptor reference to one of proc/[pid]/nsfiles.
- **unshare()** = moves calling process to a new namespace created according to CLONE_NEW* arguments. More than one such flags can be specified.

## Network Namespaces
Con gli strumenti visti finora un processo in ascolto in una **porta** può comunque essere **raggiunto** da processi di namespace diversi, non è un'isolazione ottimale! Per questo esistono i network namespace.<br>
Con essi possiamo settare una rete virtuale con un processo di **routing** che gira sul namespace globale e che si occupa di indirizzare le richieste al namespace corretto.