import React from 'react';
import styles from './Contact.css';
import resume from '../../resume.pdf';
import Mailto from 'react-mailto.js';

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <a href="https://github.com/27Nyappy" target="_blank" rel="noopener noreferrer">
        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzg0NGU2YiI+PHBhdGggZD0iTTYxLjIwMTA0LDE2MS4xMTU4NGMyLjQ0NTg0LC0xLjA1MjY0IDQuMTU4OTYsLTMuNDg0NzIgNC4xNTg5NiwtNi4zMTU4NHYtMTguNTc2YzAsLTAuNjc3NjggMC4wNTUwNCwtMS4zODI4OCAwLjE0MTA0LC0yLjA5ODRjLTAuMDQ4MTYsMC4wMTM3NiAtMC4wOTI4OCwwLjAyNDA4IC0wLjE0MTA0LDAuMDM0NGMwLDAgLTEwLjMyLDAgLTEyLjM4NCwwYy01LjE2LDAgLTkuNjMyLC0yLjA2NCAtMTEuNjk2LC02LjE5MmMtMi40MDgsLTQuNDcyIC0zLjQ0LC0xMi4wNCAtOS42MzIsLTE2LjE2OGMtMS4wMzIsLTAuNjg4IC0wLjM0NCwtMS43MiAxLjcyLC0xLjcyYzIuMDY0LDAuMzQ0IDYuNTM2LDMuMDk2IDkuMjg4LDYuODhjMy4wOTYsMy43ODQgNi4xOTIsNi44OCAxMS42OTYsNi44OGM4LjU1NTI4LDAgMTMuMTQwOCwtMC40MyAxNS44OTk2OCwtMS45MDkyYzMuMjEyOTYsLTQuNzc4MTYgNy42NjA4OCwtOC40MTA4IDEyLjMwODMyLC04LjQxMDh2LTAuMDg2Yy0xOS40OTc5MiwtMC42MjYwOCAtMzEuOTU0MTYsLTcuMTA3MDQgLTM3Ljc1NCwtMTcuMTE0Yy0xMi42MDc2LDAuMTQ0NDggLTIzLjU4NDY0LDEuMzkzMiAtMjkuODQ4ODgsMi40MzIwOGMtMC4xOTk1MiwtMS4xMjQ4OCAtMC4zNzE1MiwtMi4yNTY2NCAtMC41MTk0NCwtMy4zOTUyOGM2LjE4MTY4LC0xLjAxODI0IDE2LjY1OTkyLC0yLjIyNTY4IDI4LjcwNjgsLTIuNDU2MTZjLTAuMzg1MjgsLTAuOTQ5NDQgLTAuNzE4OTYsLTEuOTIyOTYgLTEuMDAxMDQsLTIuOTIwNTZjLTEyLjA3Nzg0LC0wLjYxMjMyIC0yMi41MDEwNCwtMC4xMzQxNiAtMjguMTYzMjgsMC4zMzM2OGMtMC4wNjg4LC0xLjE0MjA4IC0wLjE2MTY4LC0yLjI4MDcyIC0wLjE3NTQ0LC0zLjQzNjU2YzUuNjcyNTYsLTAuNDY0NCAxNS44MTM2OCwtMC45Mjg4IDI3LjU4MTkyLC0wLjM4MTg0Yy0wLjI3MTc2LC0xLjcyIC0wLjQ0NzIsLTMuNDc3ODQgLTAuNDQ3MiwtNS4zMDc5MmMwLC01Ljg0OCAyLjA2NCwtMTIuMDQgNS44NDgsLTE3LjJjLTEuNzIsLTUuODQ4IC00LjEyOCwtMTguMjMyIDAuNjg4LC0yMi43MDRjOS4yODgsMCAxNS44MjQsNC40NzIgMTguOTIsNy4yMjRjNS44NDQ1NiwtMi40MTE0NCAxMi4zODA1NiwtMy43ODc0NCAxOS42MDQ1NiwtMy43ODc0NGM3LjIyNCwwIDEzLjc2LDEuMzc2IDE5LjI2NCwzLjc4NGMzLjA5NiwtMi43NTIgOS42MzIsLTcuMjI0IDE4LjkyLC03LjIyNGM1LjE2LDQuODE2IDIuNDA4LDE3LjIgMC42ODgsMjIuNzA0YzMuNzg0LDUuMTYgNS44NDgsMTEuMDA4IDUuNTA0LDE3LjJjMCwxLjY2NDk2IC0wLjE1NDgsMy4yNzE0NCAtMC4zNzg0LDQuODQ2OTZjMTIuMDM2NTYsLTAuNTkxNjggMjIuNDUyODgsLTAuMTE2OTYgMjguMjIxNzYsMC4zNTA4OGMtMC4wMDY4OCwxLjE1OTI4IC0wLjExMzUyLDIuMjkxMDQgLTAuMTc1NDQsMy40MzY1NmMtNS43NDgyNCwtMC40NzQ3MiAtMTYuNDI2LC0wLjk2MzIgLTI4Ljc1NDk2LC0wLjMwNjE2Yy0wLjMwNjE2LDEuMTU1ODQgLTAuNjc3NjgsMi4yODA3MiAtMS4xMTgsMy4zNzEyYzEyLjE5ODI0LDAuMTU4MjQgMjIuOTI3NiwxLjMzODE2IDI5LjQwNTEyLDIuMzcwMTZjLTAuMTQ3OTIsMS4xNDIwOCAtMC4zMTk5MiwyLjI3Mzg0IC0wLjUxOTQ0LDMuMzk1MjhjLTYuNTc3MjgsLTEuMDUyNjQgLTE3Ljc4ODI0LC0yLjI4NDE2IC0zMC41NDM3NiwtMi4zNDYwOGMtNS43Mjc2LDkuOTAwMzIgLTE3Ljk1NjgsMTYuMzU3MiAtMzcuMDcyODgsMTcuMTEwNTZ2MC4xMDY2NGM4Ljk0NCwwIDE3LjIsMTMuNDE2IDE3LjIsMjIuNzA0djE4LjU3NmMwLDIuODMxMTIgMS43MTMxMiw1LjI2MzIgNC4xNTg5Niw2LjMxNTg0YzMxLjUxMzg0LC0xMC40MzAwOCA1NC4zMjEwNCwtNDAuMTUxNjggNTQuMzIxMDQsLTc1LjExNTg0YzAsLTQzLjYyNjA4IC0zNS40OTA0OCwtNzkuMTIgLTc5LjEyLC03OS4xMmMtNDMuNjI5NTIsMCAtNzkuMTIsMzUuNDkzOTIgLTc5LjEyLDc5LjEyYzAsMzQuOTY0MTYgMjIuODA3Miw2NC42ODU3NiA1NC4zMjEwNCw3NS4xMTU4NHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" />
      </a>

      <a href="https://www.linkedin.com/in/antonella-gutierrez-rodriguez/" target="_blank" rel="noopener noreferrer">
        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzg0NGU2YiI+PHBhdGggZD0iTTE0MS4wNCwxMy43NmgtMTEwLjA4Yy05LjQ5NDQsMCAtMTcuMiw3LjcwNTYgLTE3LjIsMTcuMnYxMTAuMDhjMCw5LjQ5NDQgNy43MDU2LDE3LjIgMTcuMiwxNy4yaDExMC4wOGM5LjQ5NDQsMCAxNy4yLC03LjcwNTYgMTcuMiwtMTcuMnYtMTEwLjA4YzAsLTkuNDk0NCAtNy43MDU2LC0xNy4yIC0xNy4yLC0xNy4yek01OC40OCw2OC44djY1LjM2aC0yMC42NHYtNjUuMzZ6TTM3Ljg0LDQ5Ljc3NjhjMCwtNC44MTYgNC4xMjgsLTguNDk2OCAxMC4zMiwtOC40OTY4YzYuMTkyLDAgMTAuMDc5MiwzLjY4MDggMTAuMzIsOC40OTY4YzAsNC44MTYgLTMuODUyOCw4LjcwMzIgLTEwLjMyLDguNzAzMmMtNi4xOTIsMCAtMTAuMzIsLTMuODg3MiAtMTAuMzIsLTguNzAzMnpNMTM0LjE2LDEzNC4xNmgtMjAuNjRjMCwwIDAsLTMxLjg1NDQgMCwtMzQuNGMwLC02Ljg4IC0zLjQ0LC0xMy43NiAtMTIuMDQsLTEzLjg5NzZoLTAuMjc1MmMtOC4zMjQ4LDAgLTExLjc2NDgsNy4wODY0IC0xMS43NjQ4LDEzLjg5NzZjMCwzLjEzMDQgMCwzNC40IDAsMzQuNGgtMjAuNjR2LTY1LjM2aDIwLjY0djguODA2NGMwLDAgNi42MzkyLC04LjgwNjQgMTkuOTg2NCwtOC44MDY0YzEzLjY1NjgsMCAyNC43MzM2LDkuMzkxMiAyNC43MzM2LDI4LjQxNDR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" />
      </a>

      <a href={resume} target="_blank" rel="noopener noreferrer">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACUklEQVRoge2XT2sTQRjGn3cz2wQUJAr6BfolBPFesDmo8RuYapte9FLaWPYQ/1y0B9so+xUiQhMVb4q0B/Ek+g3UQ8FaAkpZdnbHQ90Yttk/s9kwaZjfafZ5d5fnYd6ZnQU0Go3mJEHBwKounmaO8QQQ1wGUFXpKwwGANi+Ku1a79RsAWFD5F+KmMmtylAHUmEMAsAAARr8kxDU1nkai7/l/EMJZJVZG41wwYNH30Gv4fIHPmMS4ZwM0F68Djc4WRb0tD5qVJRFVM6IKnNGtxqvnP6yXT7+DjvowTldNZJCTRmRrMe7Z1tXlGvM8giA7SVdN3BqZY9z/NvCpSdDje3jcTE1r6SAaTTz9rUfljjMKwWliataIDjJpyAbZB+gGN8wyL3gXSNAGgD/jMCZLzBHlOATU1zqb7QHpTnO+vgsSL3L2JY1UENc13oS1olN665QOE58d9V8laVeVaq2Zkm+GNffUYUnW1DiQmhEP4jyA/bBGQ07CYcb9nZKaEcMzf4U1z8FBfnayIxVEwNsIa4UCPc7PTnakWgsQ1eb8YqvRbe0AwIMrSxd9QjXNkxO12AEwGLgUXIij8bENQAWSM4KeD3oXXHhCvDeIegDOJD04KYt9DwJrXLiz69tbHwNxvdv6xIU7S8AqgL3xWExHmhn5wIpuZaVt94YVra79E8DDR9VaiztmB8DlXB2mJDGIT1SPCjHIStvu3a/cXhYwPg+rZ1nsMu2Y2Fr3tje/pn3ZaufZl7T35o3+Q5w0dJBJY/qCCGBXpZGM7Kg2oNFoNNn4C4Jix58YfWDxAAAAAElFTkSuQmCC" />
      </a>

      <Mailto onClick={handleClick} secure={true} to="antonella.gutierrezrodriguez@pcc.edu">
        <img src="data:image/png;base64,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" />
      </Mailto>
    
    </div>
  );
};

export default Contact;