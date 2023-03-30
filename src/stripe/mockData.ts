export const mockStripeResponse = {
  id: 'ppage_1MqcjWHtApZFXC0dPDIYpc0q',
  object: 'checkout.session',
  account_settings: {
    account_id: 'acct_1JbXRXHtApZFXC0d',
    assets: {
      icon: null,
      logo: null,
      use_logo: false
    },
    branding: {
      background_color: null,
      border_style: 'default',
      button_color: null,
      font_family: 'default'
    },
    country: 'DE',
    display_name: 'e-comm ',
    privacy_policy_url: null,
    specified_commercial_transactions_act_url: null,
    statement_descriptor: 'e-comm test account',
    support_email: null,
    support_phone: '+4917686536794',
    support_url: null,
    terms_of_service_url: null
  },
  beta_versions: null,
  billing_address_collection: null,
  blocked_billing_address_countries: [],
  cancel_url: 'http://127.0.0.1:5173?success=false',
  card_brands: {
    accel: false,
    amex: true,
    carnet: false,
    cartes_bancaires: false,
    diners: false,
    discover: false,
    eftpos_au: false,
    elo: false,
    girocard: false,
    jcb: false,
    mastercard: true,
    nyce: false,
    pulse: false,
    star: false,
    unionpay: true,
    visa: true,
    rupay: false
  },
  client_reference_id: null,
  consent: null,
  consent_collection: null,
  cross_sell_group: null,
  currency: 'usd',
  custom_fields: [],
  custom_text: {
    shipping_address: null,
    submit: null
  },
  customer: null,
  customer_email: null,
  display_consent_collection_promotions: false,
  eid: 'NA',
  email_collection: 'always',
  enabled_third_party_wallets: [
    {
      id: 'APPLE_PAY',
      apple_pay: {
        required_version: 2
      },
      carousel_enabled: false,
      enabled: true
    },
    {
      id: 'GOOGLE_PAY',
      carousel_enabled: false,
      enabled: true,
      google_pay: {
        id: 'GOOGLE_PAY',
        version_major: 2,
        version_minor: 0
      }
    },
    {
      id: 'META_PAY',
      carousel_enabled: false,
      enabled: false
    }
  ],
  enforcement_mode: 'restricted',
  feature_flags: {
    checkout_disable_fade_in_animation: true,
    checkout_enable_apple_pay_tax_billing_address_collection_only_by_session:
      true,
    checkout_passthrough_coupon: true,
    checkout_address_autocomplete_enabled: true,
    checkout_stripepass_enabled: true,
    checkout_pm_reuse_enabled: true,
    checkout_lpm_adoption_lpm_popularity_ranking_experiment: true,
    checkout_pay_button_copy_enabled: true,
    checkout_send_expected_payment_method_type_param: true,
    checkout_link_instant_debits_create_link_account_session_on_instantiation:
      true,
    checkout_link_local_storage_login_enabled: true,
    checkout_link_local_storage_login_on_custom_domains_enabled: true,
    checkout_disable_email_overwriting: true,
    checkout_phone_number_country_select_enabled: true,
    checkout_id_bank_transfer_enable_mandiri: true,
    checkout_validate_third_party_wallet_shipping_address: true,
    checkout_link_phone_registration_global_treatment_targetting_enabled: true,
    checkout_jp_specified_commercial_transactions_act: true,
    checkout_payment_method_carousel_wallet: true
  },
  geocoding: {
    country_code: 'DE',
    region_name: null
  },
  has_dynamic_tax_rates: false,
  klarna_info: null,
  konbini_confirmation_number: null,
  line_item_group: {
    currency: 'usd',
    discount_amounts: [],
    line_items: [
      {
        id: 'li_1MqcjWHtApZFXC0dos1jGeGB',
        object: 'item',
        adjustable_quantity: null,
        cross_sell_from: null,
        description: null,
        discount_amounts: [],
        images: null,
        name: 'Renogy 100 Watts 12 Volts Monocrystalline Solar Starter Kit',
        price: {
          id: 'price_1MqcjWHtApZFXC0dz7BrzNZy',
          object: 'price',
          active: false,
          billing_scheme: 'per_unit',
          currency: 'usd',
          custom_unit_amount: null,
          livemode: false,
          product: {
            id: 'prod_NboOKw3knopdNz',
            object: 'product',
            active: false,
            attributes: [],
            description: null,
            images: [],
            livemode: false,
            name: 'Renogy 100 Watts 12 Volts Monocrystalline Solar Starter Kit',
            unit_label: null,
            url: null
          },
          recurring: null,
          tax_behavior: 'unspecified',
          tiers_mode: null,
          transform_quantity: null,
          type: 'one_time',
          unit_amount: 18999,
          unit_amount_decimal: '18999'
        },
        quantity: 3,
        subtotal: 56997,
        tax_amounts: [],
        total: 56997,
        unit_amount_override: null
      }
    ],
    localized_prices_metas: null,
    presentment_exchange_rate_meta: null,
    shipping_rate: null,
    subtotal: 56997,
    tax_amounts: [],
    total: 56997
  },
  link_info: null,
  link_settings: {
    consumer_found: null
  },
  livemode: false,
  locale: null,
  lpm_promotions: null,
  mode: 'payment',
  ordered_payment_method_types: ['card'],
  payment_intent: {
    id: 'pi_3MqclpHtApZFXC0d1E9Hpck0',
    object: 'payment_intent',
    amount: 56997,
    amount_details: {
      tip: {}
    },
    automatic_payment_methods: null,
    canceled_at: null,
    cancellation_reason: null,
    capture_method: 'automatic',
    client_secret:
      'pi_3MqclpHtApZFXC0d1E9Hpck0_secret_PZ1YECJPo5oyi3QbuwtsmxmCc',
    confirmation_method: 'automatic',
    created: 1680010865,
    currency: 'usd',
    description: null,
    last_payment_error: null,
    livemode: false,
    next_action: null,
    payment_method: 'pm_1MqclnHtApZFXC0dlHueLCzU',
    payment_method_types: ['card'],
    processing: null,
    receipt_email: null,
    setup_future_usage: null,
    shipping: {
      address: {
        city: 'Berlin Pankow',
        country: 'DE',
        line1: 'Strassestr. 123',
        line2: 'Raum 18',
        postal_code: '10437',
        state: ''
      },
      carrier: null,
      name: 'Test Customer',
      phone: null,
      tracking_number: null
    },
    source: null,
    status: 'succeeded'
  },
  payment_method_collection: 'always',
  payment_method_options: null,
  payment_method_specs: [
    {
      type: 'card',
      async: false,
      fields: []
    }
  ],
  payment_method_types: ['card'],
  phone_number_collection: {
    enabled: false
  },
  policies: null,
  prefilled: null,
  session_id:
    'cs_test_a1k7EETokzYifBXlseSGAtTxQJ7TKxe2h3frTdyvkQltnlIyD1wlTbeS27',
  setup_future_usage: null,
  setup_future_usage_for_payment_method_type: {},
  setup_intent: null,
  shipping_address_collection: {
    allowed_countries: ['US', 'CA', 'MX', 'DE', 'FR', 'IT', 'GB']
  },
  shipping_options: [],
  shipping_rate: null,
  state: 'succeeded',
  submit_type: null,
  subscription_data: null,
  success_url: 'http://127.0.0.1:5173?success=true',
  tax_context: {
    automatic_tax_address_source: null,
    automatic_tax_enabled: false,
    automatic_tax_error: null,
    automatic_tax_exempt: 'none',
    customer_tax_country: null,
    dynamic_tax_enabled: false,
    has_maximum_tax_ids: false,
    tax_id_collection_enabled: false
  },
  tax_meta: {
    computation_type: 'manual',
    customer_tax_exempt: 'none',
    error_reason: null,
    status: 'complete'
  },
  url: null,
  use_payment_methods: true,
  utm_codes: null
}

export const mockStripeSession = {
  id: 'cs_test_a1prX2Jnwzbiqtj0DtwH6rv5YUENHyJtljZxATfJnTeWrXhbVSJoUg8HVc',
  object: 'checkout.session',
  after_expiration: null,
  allow_promotion_codes: null,
  amount_subtotal: 56997,
  amount_total: 56997,
  automatic_tax: { enabled: false, status: null },
  billing_address_collection: null,
  cancel_url: 'http://127.0.0.1:5173?success=false',
  client_reference_id: null,
  consent: null,
  consent_collection: null,
  created: 1680088282,
  currency: 'usd',
  currency_conversion: null,
  custom_fields: [],
  custom_text: { shipping_address: null, submit: null },
  customer: null,
  customer_creation: 'if_required',
  customer_details: null,
  customer_email: null,
  expires_at: 1680174681,
  invoice: null,
  invoice_creation: {
    enabled: false,
    invoice_data: {
      account_tax_ids: null,
      custom_fields: null,
      description: null,
      footer: null,
      metadata: {},
      rendering_options: null
    }
  },
  livemode: false,
  locale: null,
  metadata: {},
  mode: 'payment',
  payment_intent: null,
  payment_link: null,
  payment_method_collection: 'always',
  payment_method_options: {},
  payment_method_types: ['card'],
  payment_status: 'unpaid',
  phone_number_collection: { enabled: false },
  recovered_from: null,
  setup_intent: null,
  shipping_address_collection: {
    allowed_countries: ['US', 'CA', 'MX', 'DE', 'FR', 'IT', 'GB']
  },
  shipping_cost: null,
  shipping_details: null,
  shipping_options: [],
  status: 'open',
  submit_type: null,
  subscription: null,
  success_url: 'http://127.0.0.1:5173?success=true',
  total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },
  url: 'https://checkout.stripe.com/c/pay/cs_test_a1prX2Jnwzbiqtj0DtwH6rv5YUENHyJtljZxATfJnTeWrXhbVSJoUg8HVc#fidkdWxOYHwnPyd1blpxYHZxWjA0T2ddV11NcUR1X0NdRjVhU2thY0I9Vn1jSkpPQFRHYjFUUEh0ZldLZDBPTHxPf2xsdz1KcHVuQm1SNUdGPVxqcDB9dmZTdj1EUHNjdn9KNXRodndUU0tNNTVmSEx8dkdyPCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl'
}
module.exports = {
  mockStripeResponse: mockStripeResponse,
  mockStripeSession: mockStripeSession
}
