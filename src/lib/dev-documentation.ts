export type DocumentationBlock =
  | {
      type: 'paragraph';
      text: string;
    }
  | {
      type: 'list';
      items: string[];
    }
  | {
      type: 'code';
      language: string;
      code: string;
    }
  | {
      type: 'table';
      headers: string[];
      rows: string[][];
    };

export type DocumentationSection = {
  id: string;
  title: string;
  blocks: DocumentationBlock[];
};

export type DocumentationChapter = {
  slug: string;
  title: string;
  description: string;
  sectionRange: string;
  sections: DocumentationSection[];
};

export const documentationChapters: DocumentationChapter[] = [
  {
    slug: 'foundations',
    title: 'Foundations',
    description: 'Core block structure, visibility rules, and project-level expectations.',
    sectionRange: 'Sections 1-6',
    sections: [
      {
        id: 'root-documentation',
        title: '1. Root Documentation',
        blocks: [
          {
            type: 'paragraph',
            text: 'Every project should contain a root README.md that acts as the main documentation entry point.',
          },
          {
            type: 'code',
            language: 'text',
            code: `project/
├── README.md
├── api/
├── src/
├── docs/
└── tests/`,
          },
          {
            type: 'list',
            items: [
              'Project name',
              'Project summary',
              'Installation instructions',
              'Basic usage',
              'Project structure',
              'Documentation index',
              'Links to folder-level documentation',
            ],
          },
          {
            type: 'code',
            language: 'md',
            code: `# Project Name

Short description of the project.

## Documentation

- [API Documentation](api/README.md)
- [Source Documentation](src/README.md)
- [Architecture](docs/architecture.md)
- [Deployment](docs/deployment.md)`,
          },
        ],
      },
      {
        id: 'documentation-block',
        title: '2. Documentation Block',
        blocks: [
          {
            type: 'paragraph',
            text: 'Every block starts with a unique documentation ID and ends with ::end. IDs must be unique inside the project and use lowercase kebab-case.',
          },
          {
            type: 'code',
            language: 'text',
            code: `::neup.documentation::documentation-id

Documentation content goes here.

::end`,
          },
          {
            type: 'code',
            language: 'text',
            code: `create-account
get-user-profile
upload-file
generate-access-token`,
          },
        ],
      },
      {
        id: 'minimal-block',
        title: '3. Minimal Documentation Block',
        blocks: [
          {
            type: 'code',
            language: 'text',
            code: `::neup.documentation::documentation-id

Short documentation.

::end`,
          },
          {
            type: 'list',
            items: [
              'A function',
              'An API route',
              'A class',
              'A component',
              'A module',
              'A service',
              'A configuration',
              'A folder',
              'A database entity',
              'A command',
              'A general guide',
            ],
          },
        ],
      },
      {
        id: 'visibility-sections',
        title: '4. Public and Private Documentation Sections',
        blocks: [
          {
            type: 'paragraph',
            text: 'Visibility is controlled with ::public and ::private sections. A single block may contain both.',
          },
          {
            type: 'code',
            language: 'text',
            code: `::public

Content that may be published publicly.

::public end`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::private

Content intended only for private or internal documentation.

::private end`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::neup.documentation::create-account
::api POST /api/accounts

::public

Creates a new account.

::public end

::private

The account is created inside a database transaction.

The authenticated user is automatically assigned as the account owner.

::private end

::end`,
          },
          {
            type: 'list',
            items: [
              'Public generators include only ::public content.',
              'Private generators may include both public and private content.',
            ],
          },
        ],
      },
      {
        id: 'closing-rules',
        title: '5. Section Closing Rules',
        blocks: [
          {
            type: 'paragraph',
            text: 'Visibility sections should normally be closed explicitly, but parsers must also accept implicit closure when ::end appears while a section is still open.',
          },
          {
            type: 'code',
            language: 'text',
            code: `::public

Public documentation.

::public end

::private

Private documentation.

::private end

::end`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::public

Public documentation.

::end`,
          },
          {
            type: 'list',
            items: [
              '::end closes the active visibility section and the overall block.',
              'Implicit section closure should produce a validation warning.',
              'The block must still be registered and processed.',
            ],
          },
          {
            type: 'code',
            language: 'text',
            code: `Public section was closed implicitly by ::end.
Add ::public end before ::end.`,
          },
          {
            type: 'code',
            language: 'text',
            code: `Private section was closed implicitly by ::end.
Add ::private end before ::end.`,
          },
        ],
      },
      {
        id: 'unscoped-content',
        title: '6. Unscoped Documentation Content',
        blocks: [
          {
            type: 'paragraph',
            text: 'Content outside ::public and ::private is shared documentation and may appear in both public and private outputs unless project configuration changes that behavior.',
          },
          {
            type: 'code',
            language: 'text',
            code: `::neup.documentation::create-account
::api POST /api/accounts

Creates an account.

::public

This endpoint is available to authenticated API users.

::public end

::private

The implementation creates the account inside a transaction.

::private end

::end`,
          },
          {
            type: 'code',
            language: 'text',
            code: `unscoped-content = shared`,
          },
        ],
      },
    ],
  },
  {
    slug: 'functions-and-apis',
    title: 'Functions and APIs',
    description: 'Function blocks, API blocks, parameters, responses, returns, errors, details, and custom fields.',
    sectionRange: 'Sections 7-20',
    sections: [
      {
        id: 'function-documentation',
        title: '7. Function Documentation',
        blocks: [
          {
            type: 'paragraph',
            text: 'Function documentation uses ::function and may describe shared behavior, parameters, returns, and detailed implementation notes.',
          },
          {
            type: 'code',
            language: 'text',
            code: `::function functionName()`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::neup.documentation::get-account
::function getAccount(accountId)

Returns an account by its identifier.

::param external accountId

The account identifier received from the function caller.

::returns Account

Returns the matching account.

::details

The function validates the identifier and retrieves the account from storage.

::end`,
          },
        ],
      },
      {
        id: 'parameter-scope',
        title: '8-10. Parameter Scope and Defaults',
        blocks: [
          {
            type: 'paragraph',
            text: 'Parameter scope describes the value’s relationship to the implementation, not its documentation visibility. Visibility is still controlled only by ::public and ::private.',
          },
          {
            type: 'code',
            language: 'text',
            code: `::param parameterName
::param scope parameterName`,
          },
          {
            type: 'table',
            headers: ['Scope', 'Example', 'Meaning'],
            rows: [
              ['external', '::param external accountId', 'Accepted from outside the function or handler'],
              ['internal', '::param internal normalizedAccountId', 'Created or used only inside the implementation'],
              ['captured', '::param captured currentUser', 'Available from the surrounding scope'],
              ['injected', '::param injected database', 'Supplied through dependency injection'],
              ['global', '::param global applicationConfig', 'Read from global or application-level state'],
              ['environment', '::param environment DATABASE_URL', 'Comes from runtime or environment variables'],
            ],
          },
          {
            type: 'paragraph',
            text: 'When no scope is provided, the default is external because documented parameters normally come from the caller.',
          },
          {
            type: 'code',
            language: 'text',
            code: `::param accountId`,
          },
        ],
      },
      {
        id: 'parameter-metadata',
        title: '11-12. Parameter Metadata and Internal Variables',
        blocks: [
          {
            type: 'code',
            language: 'text',
            code: `::param external accountId
::datatype string
::required true
::example acc_123456

The unique identifier of the account.`,
          },
          {
            type: 'list',
            items: [
              '::datatype string',
              '::required true',
              '::default value',
              '::example value',
              '::format uuid',
              '::minimum 1',
              '::maximum 100',
              '::nullable false',
              '::deprecated false',
            ],
          },
          {
            type: 'code',
            language: 'text',
            code: `::param internal normalizedAccountId
::datatype string

The validated and normalized version of \`accountId\`.`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::neup.documentation::get-account
::function getAccount(accountId)

Retrieves an account.

::param external accountId
::datatype string

The identifier supplied by the caller.

::param internal normalizedAccountId
::datatype string

The normalized identifier used for the database query.

::end`,
          },
        ],
      },
      {
        id: 'api-documentation',
        title: '13-16. API Documentation, Parameters, and Responses',
        blocks: [
          {
            type: 'code',
            language: 'text',
            code: `::api METHOD /path`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::neup.documentation::create-account
::api POST /api/accounts

::public

Creates a new account for the authenticated user.

::param name

The account name.

::param currency

The default account currency.

::public end

::private

The endpoint calls \`createAccount()\` and creates all records inside a database
transaction.

The authenticated user becomes the account owner.

::private end

::end`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::param accountId
::location path
::datatype string
::required true
::example acc_123456

The unique account identifier.`,
          },
          {
            type: 'list',
            items: [
              '::location path',
              '::location query',
              '::location body',
              '::location header',
              '::location cookie',
            ],
          },
          {
            type: 'code',
            language: 'text',
            code: `::response 200

The request completed successfully.

::response 404

The requested account was not found.`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::response 200
::content-type application/json

The account was returned successfully.`,
          },
        ],
      },
      {
        id: 'returns-errors-details-custom',
        title: '17-20. Returns, Errors, Details, and Custom Fields',
        blocks: [
          {
            type: 'code',
            language: 'text',
            code: `::returns
::datatype Promise<Account>
::nullable false

A promise that resolves to the matching account.`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::error AccountNotFoundError

Thrown when the requested account does not exist.

::error PermissionDeniedError

Thrown when the caller cannot access the account.`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::details

The function validates the account identifier before querying the database.

Archived accounts are excluded unless the caller explicitly requests them.`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::owner Accounts Team
::service Account Service
::version 1.2.0
::since 1.0.0
::rate-limit 100 requests per minute
::cache 60 seconds`,
          },
          {
            type: 'paragraph',
            text: 'Unknown ::field-name entries should be stored as custom metadata and displayed unless configured as hidden.',
          },
        ],
      },
    ],
  },
  {
    slug: 'folders-and-sources',
    title: 'Folders and Source Placement',
    description: 'Folder README behavior, inheritance, nearby docs, and source-comment examples.',
    sectionRange: 'Sections 21-28',
    sections: [
      {
        id: 'folder-level-docs',
        title: '21-24. Folder-Level Documentation and Inheritance',
        blocks: [
          {
            type: 'paragraph',
            text: 'Folders may contain README.md files that document shared behavior for child files and subfolders. Documentation may also live near the code without modifying the source file itself.',
          },
          {
            type: 'code',
            language: 'text',
            code: `project/
├── README.md
├── api/
│   ├── README.md
│   ├── accounts/
│   ├── users/
│   └── files/
└── src/`,
          },
          {
            type: 'code',
            language: 'md',
            code: `# API

All routes in this folder use JSON request and response bodies.

All protected endpoints require bearer authentication.

## Shared Errors

- \`400\` Invalid request
- \`401\` Authentication required
- \`500\` Internal server error`,
          },
          {
            type: 'paragraph',
            text: 'The generator should resolve folder and file context from broadest to most specific: root README.md -> parent folder README.md -> nearest folder README.md -> source-file documentation.',
          },
          {
            type: 'code',
            language: 'md',
            code: `# Accounts API

::neup.documentation::create-account
::api POST /api/accounts

::public

Creates a new account.

::param name
::location body
::datatype string
::required true

The account name.

::public end

::private

Implemented in \`create.ts\`.

The route creates the account inside a database transaction.

::private end

::end`,
          },
        ],
      },
      {
        id: 'source-code-docs',
        title: '26. Source-Code Documentation',
        blocks: [
          {
            type: 'paragraph',
            text: 'Documentation blocks may live inside native comment syntax for the language being documented.',
          },
          {
            type: 'code',
            language: 'ts',
            code: `/*
::neup.documentation::get-account
::function getAccount(accountId)

::public

Returns an account by its identifier.

::public end

::private

Uses the account repository and permission service.

::private end

::param external accountId
::datatype string

The account identifier supplied by the caller.

::end
*/`,
          },
          {
            type: 'code',
            language: 'go',
            code: `/*
::neup.documentation::get-account
::function GetAccount(accountID)

Returns an account by its identifier.

::param external accountID

The account identifier supplied by the caller.

::end
*/`,
          },
          {
            type: 'code',
            language: 'python',
            code: `"""
::neup.documentation::get-account
::function get_account(account_id)

Returns an account by its identifier.

::param external account_id

The account identifier supplied by the caller.

::end
"""`,
          },
          {
            type: 'code',
            language: 'php',
            code: `/*
::neup.documentation::get-account
::function getAccount($accountId)

Returns an account by its identifier.

::param external accountId

The account identifier supplied by the caller.

::end
*/`,
          },
          {
            type: 'code',
            language: 'html',
            code: `<!--
::neup.documentation::account-form

Documents the account form component.

::end
-->`,
          },
        ],
      },
      {
        id: 'complete-examples',
        title: '27-28. Complete Function and API Examples',
        blocks: [
          {
            type: 'code',
            language: 'ts',
            code: `/*
::neup.documentation::get-account
::function getAccount(accountId)
::title Get Account
::owner Accounts Team

::public

Returns an account by its identifier.

::param external accountId
::datatype string
::required true

The unique account identifier.

::returns
::datatype Promise<Account>

A promise that resolves to the requested account.

::error AccountNotFoundError

Thrown when the account does not exist.

::public end

::private

::param internal normalizedAccountId
::datatype string

The validated and normalized account identifier used by the repository.

::param injected accountRepository
::datatype AccountRepository

The repository used to retrieve account records.

::details

The function normalizes the identifier, verifies access, and retrieves the
account from the account repository.

::error DatabaseQueryError

Thrown when the repository query fails.

::private end

::end
*/
async function getAccount(accountId: string): Promise<Account> {
  const normalizedAccountId = normalizeAccountId(accountId);
  return accountRepository.findById(normalizedAccountId);
}`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::neup.documentation::create-account
::api POST /api/accounts
::title Create Account
::authentication bearer
::owner Accounts Team

::public

Creates an account for the authenticated user.

::param name
::location body
::datatype string
::required true
::example Primary Account

The account name.

::param currency
::location body
::datatype string
::required false
::default NPR

The account currency.

::response 201

The account was created successfully.

::response 400

The request contains invalid data.

::response 401

Authentication is required.

::public end

::private

::param internal normalizedName
::datatype string

The normalized account name used for duplicate checking.

::param injected accountRepository
::datatype AccountRepository

The repository used to create the account.

::details

The endpoint validates the request and creates the account inside a database
transaction.

The authenticated user is assigned as the account owner.

::error DuplicateAccountError

Raised when the user already has an account with the same normalized name.

::private end

::end`,
          },
        ],
      },
    ],
  },
  {
    slug: 'generation-and-validation',
    title: 'Generation and Validation',
    description: 'Parsing rules, warning and error semantics, output filtering, and standard templates.',
    sectionRange: 'Sections 29-41',
    sections: [
      {
        id: 'parsing-rules',
        title: '29-34. Parsing Rules and Documentation Generation',
        blocks: [
          {
            type: 'list',
            items: [
              'A block starts with ::neup.documentation::documentation-id and ends with ::end.',
              '::public normally ends with ::public end and ::private normally ends with ::private end.',
              'If ::end is reached while a visibility section is still open, the parser must close the active section, register it, close the block, and emit a warning.',
              'Field content belongs to the current field until another field or section boundary appears.',
              'Unknown fields must be stored as custom metadata instead of being discarded.',
              'Source-language comment symbols must be removed before parsing.',
              'Blank lines and Markdown formatting must be preserved.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Public builds include shared unscoped content, public content, public metadata, parameters, responses, and errors. Private builds may also include private content, implementation notes, internal variables, injected dependencies, architecture notes, and source locations.',
          },
          {
            type: 'paragraph',
            text: 'Folder documentation generation may combine root docs, parent folder docs, nearest folder docs, file-level docs, and inline code docs, while preserving the source of every inherited section.',
          },
          {
            type: 'code',
            language: 'text',
            code: `Source: /api/README.md
Source: /api/accounts/README.md
Source: /api/accounts/create.ts`,
          },
        ],
      },
      {
        id: 'validation',
        title: '30-31. Validation Warnings and Errors',
        blocks: [
          {
            type: 'paragraph',
            text: 'Recoverable issues should generate warnings without blocking output unless strict validation is enabled. Fatal parsing failures should be emitted as errors.',
          },
          {
            type: 'code',
            language: 'text',
            code: `WARNING NDS001:
Public section was closed implicitly by ::end.
Add ::public end before ::end.

WARNING NDS002:
Private section was closed implicitly by ::end.
Add ::private end before ::end.

WARNING NDS003:
Documentation block contains no ::function, ::api, title, or general content.

WARNING NDS004:
Documentation ID is duplicated.

WARNING NDS005:
A parameter scope is not recognized.`,
          },
          {
            type: 'code',
            language: 'text',
            code: `ERROR NDS101:
Documentation block does not contain ::end.

ERROR NDS102:
Documentation block does not have an ID.

ERROR NDS103:
A new documentation block started before the previous block ended.`,
          },
        ],
      },
      {
        id: 'templates',
        title: '35-40. Recommended Templates and Project Structure',
        blocks: [
          {
            type: 'code',
            language: 'text',
            code: `::neup.documentation::function-id
::function functionName(parameterName)
::title Function Title

Short shared description.

::public

Public function documentation.

::param external parameterName
::datatype string
::required true

Public parameter description.

::returns
::datatype ReturnType

Public return description.

::public end

::private

Private implementation documentation.

::param internal localVariable
::datatype string

Internal variable description.

::param injected dependency
::datatype DependencyType

Injected dependency description.

::details

Detailed private implementation notes.

::private end

::end`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::neup.documentation::api-id
::api METHOD /api/path
::title API Title
::authentication bearer

Short shared description.

::public

Public API documentation.

::param parameterName
::location body
::datatype string
::required true

Public parameter description.

::response 200

Successful response description.

::public end

::private

Private implementation documentation.

::param internal normalizedValue
::datatype string

Internal implementation value.

::details

Detailed private API implementation notes.

::private end

::end`,
          },
          {
            type: 'code',
            language: 'md',
            code: `# Folder Name

Short explanation of the folder.

## Shared Rules

Rules that apply to files and subfolders.

::neup.documentation::folder-documentation-id
::title Folder Documentation

Shared folder-level documentation.

::public

Information that may appear in public documentation.

::public end

::private

Private architecture and implementation information.

::private end

::end`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::neup.documentation::function-id
::function functionName()

Short explanation of the function.

::param external parameterName

Short explanation of the parameter.

::end`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::neup.documentation::api-id
::api METHOD /api/path

Short explanation of the API.

::param parameterName

Short explanation of the parameter.

::details

Detailed API documentation.

::end`,
          },
          {
            type: 'code',
            language: 'text',
            code: `project/
├── README.md
├── docs/
│   ├── architecture.md
│   ├── deployment.md
│   └── conventions.md
├── api/
│   ├── README.md
│   ├── accounts/
│   │   ├── README.md
│   │   ├── create.ts
│   │   └── update.ts
│   └── users/
│       ├── README.md
│       └── profile.ts
├── src/
│   ├── README.md
│   ├── components/
│   │   └── README.md
│   └── services/
│       └── README.md
└── tests/
    └── README.md`,
          },
        ],
      },
      {
        id: 'principles',
        title: '41. Core Principles',
        blocks: [
          {
            type: 'list',
            items: [
              'Documentation stays close to the code or folder it describes.',
              'Developers may document code without modifying source files.',
              'Parameter scope describes code accessibility, not documentation visibility.',
              'Public and private content may coexist in one block.',
              'Public and private sections should be explicitly closed.',
              'Implicit section closing is accepted with a warning.',
              'Folder README.md files provide shared documentation.',
              'Unknown fields remain extensible.',
              'Markdown remains human-readable.',
              'The format remains machine-parseable.',
              'Private content never reaches public documentation builds.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'linking-and-titles',
    title: 'Semantic Linking and Titles',
    description: 'README link semantics, title resolution, generated link targets, and managed index rules.',
    sectionRange: 'Section 42',
    sections: [
      {
        id: 'semantic-links',
        title: '42. Semantic Documentation Links',
        blocks: [
          {
            type: 'paragraph',
            text: 'README links must use meaningful visible titles based on what the code does, not only the filename, extension, folder name, or raw documentation ID.',
          },
          {
            type: 'code',
            language: 'md',
            code: `- [Account Creation](./create.php)`,
          },
          {
            type: 'code',
            language: 'md',
            code: `- [create.php](./create.php)`,
          },
        ],
      },
      {
        id: 'title-resolution',
        title: '42.1-42.5. Title Resolution and Inference',
        blocks: [
          {
            type: 'list',
            items: [
              '1. Explicit ::title',
              '2. API purpose inferred from ::api',
              '3. Function purpose inferred from ::function',
              '4. Documentation block ID',
              '5. Source filename as a final fallback',
            ],
          },
          {
            type: 'code',
            language: 'php',
            code: `/*
::neup.documentation::create-account
::title Account Creation
::api POST /api/v1/accounts

Creates a new account.

::end
*/`,
          },
          {
            type: 'table',
            headers: ['API operation', 'Suggested documentation title'],
            rows: [
              ['POST /accounts', 'Account Creation'],
              ['GET /accounts', 'Account Listing'],
              ['GET /accounts/{accountId}', 'Account Retrieval'],
              ['PUT /accounts/{accountId}', 'Account Replacement'],
              ['PATCH /accounts/{accountId}', 'Account Update'],
              ['DELETE /accounts/{accountId}', 'Account Deletion'],
            ],
          },
          {
            type: 'list',
            items: [
              'Good explicit titles: Account Creation, Account Retrieval, Account Update, Account Deletion, User Authentication, File Upload, Upload Token Generation, Message Delivery.',
              'Avoid titles such as create.php, create, account/create, Create File, or API File.',
              'Function names may be converted from camelCase, PascalCase, snake_case, or kebab-case into readable titles.',
              'If no title, API, or function is available, the application may derive the display title from the documentation ID.',
            ],
          },
        ],
      },
      {
        id: 'readme-generation',
        title: '42.6-42.10. README Chapter and Route Generation',
        blocks: [
          {
            type: 'code',
            language: 'md',
            code: `# Account API

Documentation for account-related API operations.

## Account Operations

- [Account Creation](./create.php)
- [Account Retrieval](./get.php)
- [Account Update](./update.php)
- [Account Deletion](./delete.php)`,
          },
          {
            type: 'list',
            items: [
              'When docs live in a source file, the README link should point to that source file.',
              'When docs live in a dedicated Markdown file, the README link should point to that Markdown file instead.',
              'When one file contains multiple documentation blocks, README links should use anchors when supported.',
              'Generated web documentation should provide a canonical route for every documentation block.',
              'Repository README files should normally use source links; documentation sites should normally use generated documentation routes.',
            ],
          },
          {
            type: 'code',
            language: 'text',
            code: `/docs/api-v1/account/account-creation`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::link-mode source
::link-mode documentation`,
          },
        ],
      },
      {
        id: 'link-metadata-and-managed-sections',
        title: '42.11-42.15. Link Metadata and Managed Chapters',
        blocks: [
          {
            type: 'code',
            language: 'text',
            code: `::title Account Creation
::link-title Account Creation
::link-target ./create.php`,
          },
          {
            type: 'code',
            language: 'text',
            code: `::neup.documentation::create-account
::title Account Creation
::api POST /api/v1/accounts
::link-target ./README.md#account-creation`,
          },
          {
            type: 'code',
            language: 'md',
            code: `<!-- ::neup.documentation.index start -->

## Account Operations

- [Account Creation](./create.php)
- [Account Retrieval](./get.php)
- [Account Update](./update.php)
- [Account Deletion](./delete.php)

<!-- ::neup.documentation.index end -->`,
          },
          {
            type: 'list',
            items: [
              'README updates should preserve manual content and replace only the managed section between the start and end markers.',
              'Generated links should be grouped by actual purpose, such as Account APIs, Account Functions, or Shared Account Documentation.',
              'Optional grouping metadata may be set with ::group Account Operations.',
              'The final required link format is [Meaningful Documentation Title](relative-or-generated-target).',
            ],
          },
        ],
      },
    ],
  },
];

export function getDocumentationChapter(slug: string) {
  return documentationChapters.find((chapter) => chapter.slug === slug);
}

export function getDocumentationChapterIndex(slug: string) {
  return documentationChapters.findIndex((chapter) => chapter.slug === slug);
}

export function getDocumentationChapterSiblings(slug: string) {
  const index = getDocumentationChapterIndex(slug);

  if (index === -1) {
    return {
      previous: undefined,
      next: undefined,
    };
  }

  return {
    previous: documentationChapters[index - 1],
    next: documentationChapters[index + 1],
  };
}
